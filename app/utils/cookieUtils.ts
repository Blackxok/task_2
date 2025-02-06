type CookieOptions = {
  days?: number
  path?: string
  sameSite?: 'Strict' | 'Lax' | 'None'
  secure?: boolean
}

class CookieManager {
  private static instance: CookieManager
  private cookieChangeListeners: Set<() => void> = new Set()

  private constructor() {}

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager()
    }
    return CookieManager.instance
  }

  set(name: string, value: string, options: CookieOptions = {}): void {
    try {
      const {
        days = 7,
        path = '/',
        sameSite = 'Strict',
        secure = true
      } = options

      const d = new Date()
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
      
      const cookieParts = [
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
        `expires=${d.toUTCString()}`,
        `path=${path}`,
        `SameSite=${sameSite}`
      ]

      if (secure) {
        cookieParts.push('Secure')
      }

      document.cookie = cookieParts.join('; ')
      this.notifyListeners()
    } catch (error) {
      console.error(`Cookie o'rnatishda xatolik:`, error)
    }
  }

  get(name: string): string | null {
    try {
      const value = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1]

      return value ? decodeURIComponent(value) : null
    } catch (error) {
      console.error(`Cookie olishda xatolik:`, error)
      return null
    }
  }

  remove(name: string, path = '/'): void {
    try {
      document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; SameSite=Strict`
      this.notifyListeners()
    } catch (error) {
      console.error(`Cookie o'chirishda xatolik:`, error)
    }
  }

  addChangeListener(listener: () => void): () => void {
    this.cookieChangeListeners.add(listener)
    return () => this.cookieChangeListeners.delete(listener)
  }

  private notifyListeners(): void {
    this.cookieChangeListeners.forEach(listener => listener())
  }

  getAllCookies(): Record<string, string> {
    try {
      return document.cookie
        .split('; ')
        .reduce((acc: Record<string, string>, cookie) => {
          const [name, value] = cookie.split('=').map(decodeURIComponent)
          if (name && value) {
            acc[name] = value
          }
          return acc
        }, {})
    } catch (error) {
      console.error(`Barcha cookie-larni olishda xatolik:`, error)
      return {}
    }
  }
}

// Cookie utility functions for easier usage
const Cookies = {
  set(name: string, value: string, options?: CookieOptions): void {
    CookieManager.getInstance().set(name, value, options)
  },

  get(name: string): string | null {
    return CookieManager.getInstance().get(name)
  },

  remove(name: string, path?: string): void {
    CookieManager.getInstance().remove(name, path)
  },

  onChange(listener: () => void): () => void {
    return CookieManager.getInstance().addChangeListener(listener)
  },

  getAll(): Record<string, string> {
    return CookieManager.getInstance().getAllCookies()
  }
}

export default Cookies