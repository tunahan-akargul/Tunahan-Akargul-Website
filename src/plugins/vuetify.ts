import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
    dark: false,
    colors: {
        background: '#f8fafc',
        surface: '#ffffff',
        'surface-variant': '#f1f5f9',
        primary: '#059669',
        'primary-darken-1': '#047857',
        secondary: '#0cba83ff',
        error: '#ef4444',
        info: '#3b82f6',
        success: '#10b981',
        warning: '#f59e0b',
        'on-background': '#0f172a',
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
    },
}

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: lightTheme,
        },
    },
    defaults: {
        VBtn: {
            rounded: 'lg',
        },
        VCard: {
            rounded: 'lg',
            elevation: 2,
        },
        VChip: {
            rounded: 'lg',
        },
        VTextField: {
            rounded: 'lg',
            variant: 'outlined',
        },
    },
})
