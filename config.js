// ============================================
// STUDENT CONFIGURATION FILE
// ============================================
// Students: Replace these values with your own Supabase project credentials
// You can find these in your Supabase project settings under "API"

const SUPABASE_CONFIG = {
    // TODO: Replace with your Supabase project URL
    // Example: 'https://xyzcompany.supabase.co'
    url: 'https://sylzluobnsrlfbpycgxw.supabase.co',

    // TODO: Replace with your Supabase anon/public key
    // This is safe to expose in client-side code when using RLS
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bHpsdW9ibnNybGZicHljZ3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NTk3NTEsImV4cCI6MjA4NzUzNTc1MX0.M9-ZZ9ZaHEI0rm1T3h-KlY22gJFLxw3LwGvXGyrrOgU'
};

// Validate configuration
if (SUPABASE_CONFIG.url === 'https://sylzluobnsrlfbpycgxw.supabase.co' ||
    SUPABASE_CONFIG.anonKey === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bHpsdW9ibnNybGZicHljZ3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NTk3NTEsImV4cCI6MjA4NzUzNTc1MX0.M9-ZZ9ZaHEI0rm1T3h-KlY22gJFLxw3LwGvXGyrrOgU') {
    console.warn('⚠️ Please configure your Supabase credentials in config.js');
}
