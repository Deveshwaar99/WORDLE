'use server'
import crypto from 'node:crypto'

export async function encryptSymmetric(plaintext: string) {
  const key = process.env.CRYPTO_ENCRYPTION_KEY!

  const iv = crypto.randomBytes(12).toString('base64')

  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    Buffer.from(key, 'base64'),
    Buffer.from(iv, 'base64')
  )
  let ciphertext = cipher.update(plaintext, 'utf8', 'base64')
  ciphertext += cipher.final('base64')
  const tag = cipher.getAuthTag()

  const stringTag = tag.toString('base64')
  return { ciphertext, iv, stringTag }
}

export async function decryptSymmetric(ciphertext: string, iv: string, stringTag: string) {
  const key = process.env.CRYPTO_ENCRYPTION_KEY!

  const decipher = crypto.createDecipheriv(
    'aes-256-gcm',
    Buffer.from(key, 'base64'),
    Buffer.from(iv, 'base64')
  )

  decipher.setAuthTag(Buffer.from(stringTag, 'base64'))

  let plaintext = decipher.update(ciphertext, 'base64', 'utf8')
  plaintext += decipher.final('utf8')

  return plaintext
}
