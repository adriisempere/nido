const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('../db')

const register = async (req, res) => {
  const { email, password, name } = req.body

  try {
    const userExists = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    )

    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'Este email ya está registrado' })
    }

    const salt = await bcrypt.genSalt(10) // Valor aleatorio para fortalecer el hash de la contraseña.
    const password_hash = await bcrypt.hash(password, salt)

    const result = await pool.query(
      'INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, password_hash, name]
    )

    const user = result.rows[0]

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    ) // El token se genera con el ID del usuario, una clave secreta y una expiración de 7 días.

    res.status(201).json({ user, token })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error en el servidor' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' })
    }

    const user = result.rows[0]

    const validPassword = await bcrypt.compare(password, user.password_hash)

    if (!validPassword) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' })
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      user: { id: user.id, email: user.email, name: user.name },
      token
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error en el servidor' })
  }
}

module.exports = { register, login }