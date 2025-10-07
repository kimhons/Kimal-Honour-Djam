import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for common operations
export async function subscribeToNewsletter(email, name) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email, name, source: 'website' }])
    .select()

  return { data, error }
}

export async function submitContactForm(formData) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData])
    .select()

  return { data, error }
}

export async function getBlogPosts(category = null, limit = 10) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  return { data, error }
}

export async function getBlogPost(slug) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .not('published_at', 'is', null)
    .single()

  return { data, error }
}
