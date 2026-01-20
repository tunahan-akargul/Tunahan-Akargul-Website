import { onMounted } from 'vue'
import { useTheme } from 'vuetify'

const STORAGE_KEY = 'theme-preference'

export function useThemePreference() {
    const theme = useTheme()

    const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        localStorage.setItem(STORAGE_KEY, theme.global.name.value)
    }

    const initTheme = () => {
        const stored = localStorage.getItem(STORAGE_KEY)

        if (stored && (stored === 'light' || stored === 'dark')) {
            theme.global.name.value = stored
        } else {
            // Respect system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            theme.global.name.value = prefersDark ? 'dark' : 'light'
        }
    }

    // Watch for system preference changes when no stored preference
    onMounted(() => {
        initTheme()

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem(STORAGE_KEY)) {
                theme.global.name.value = e.matches ? 'dark' : 'light'
            }
        })
    })

    return {
        theme,
        toggleTheme,
        isDark: () => theme.global.current.value.dark,
    }
}
