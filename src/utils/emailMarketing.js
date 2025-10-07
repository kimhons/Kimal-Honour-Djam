// Email Marketing Integration System
// Automated newsletter and blog distribution for Kimal Honour Djam

export const EMAIL_PLATFORMS = {
  CONVERTKIT: {
    name: 'ConvertKit (Kit)',
    apiEndpoint: 'https://api.convertkit.com/v3',
    features: [
      'Advanced automation',
      'Creator-focused tools',
      'Detailed segmentation',
      'High deliverability',
      'Landing page builder'
    ],
    pricing: {
      free: 'Up to 1,000 subscribers',
      creator: '$9-79/month',
      creatorPro: '$25-159/month'
    },
    recommended: true
  },
  BEEHIIV: {
    name: 'Beehiiv',
    apiEndpoint: 'https://api.beehiiv.com/v2',
    features: [
      'Newsletter-focused',
      'Beautiful templates',
      'Built-in monetization',
      'Growth tools',
      'SEO-friendly archives'
    ],
    pricing: {
      free: 'Up to 2,500 subscribers',
      growth: '$39/month',
      scale: '$99/month'
    },
    recommended: false
  },
  MAILCHIMP: {
    name: 'Mailchimp',
    apiEndpoint: 'https://us1.api.mailchimp.com/3.0',
    features: [
      'All-in-one platform',
      'E-commerce integration',
      'Automation workflows',
      'Analytics dashboard',
      'Template library'
    ],
    pricing: {
      free: 'Up to 500 contacts',
      essentials: '$13-350/month',
      standard: '$20-540/month'
    },
    recommended: false
  }
}

// Newsletter templates and automation
export const NEWSLETTER_TEMPLATES = {
  WEEKLY_DIGEST: {
    name: 'The Science of Success Weekly',
    frequency: 'Weekly (Sundays)',
    template: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <header style="background: linear-gradient(135deg, #1e3a8a, #0f766e); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">The Science of Success</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Weekly insights from Kimal Honour Djam</p>
        </header>
        
        <main style="padding: 30px; background: white;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">This Week's Insights</h2>
          
          <!-- Dynamic content insertion -->
          {{WEEKLY_ARTICLES}}
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3 style="color: #1e3a8a;">Featured Resource</h3>
          {{FEATURED_RESOURCE}}
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3 style="color: #1e3a8a;">Quick Win of the Week</h3>
          {{QUICK_WIN}}
        </main>
        
        <footer style="background: #f9fafb; padding: 20px; text-align: center; color: #6b7280;">
          <p>Kimal Academy | Transforming lives through science and leadership</p>
          <p>PhD Medical Physics | U.S. Army Medical Officer | Certified Leadership Coach</p>
        </footer>
      </div>
    `,
    segments: ['all_subscribers', 'blog_readers', 'course_students']
  },
  
  BLOG_NOTIFICATION: {
    name: 'New Article Alert',
    frequency: 'Per article (3x/week)',
    template: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <header style="background: #1e3a8a; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Article Published</h1>
        </header>
        
        <main style="padding: 30px; background: white;">
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-transform: uppercase;">
              {{CATEGORY}}
            </span>
          </div>
          
          <h2 style="color: #1e3a8a; margin-bottom: 15px; line-height: 1.3;">{{TITLE}}</h2>
          
          <p style="color: #6b7280; margin-bottom: 20px; line-height: 1.6;">{{EXCERPT}}</p>
          
          <div style="margin-bottom: 25px;">
            <span style="color: #9ca3af; font-size: 14px;">📅 {{PUBLISH_DATE}} • ⏱️ {{READ_TIME}}</span>
          </div>
          
          <a href="{{ARTICLE_URL}}" style="background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
            Read Full Article →
          </a>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3 style="color: #1e3a8a; margin-bottom: 15px;">Coming This Week</h3>
          <ul style="color: #6b7280; line-height: 1.8;">
            <li><strong>Monday:</strong> Wealth Hacks - Neuroscience-based financial strategies</li>
            <li><strong>Wednesday:</strong> Leadership Principles - Military medical insights</li>
            <li><strong>Friday:</strong> AI & Personal Growth - Technology for peak performance</li>
          </ul>
        </main>
        
        <footer style="background: #f9fafb; padding: 20px; text-align: center; color: #6b7280;">
          <p>You're receiving this because you subscribed to The Science of Success newsletter.</p>
          <a href="{{UNSUBSCRIBE_URL}}" style="color: #9ca3af;">Unsubscribe</a>
        </footer>
      </div>
    `,
    segments: ['blog_subscribers', 'all_subscribers']
  },
  
  COURSE_PROMOTION: {
    name: 'Course Launch Sequence',
    frequency: 'Campaign-based',
    template: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <header style="background: linear-gradient(135deg, #7c2d12, #dc2626); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">{{COURSE_NAME}}</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">{{COURSE_SUBTITLE}}</p>
        </header>
        
        <main style="padding: 30px; background: white;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">Transform Your {{FOCUS_AREA}} in {{DURATION}}</h2>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 25px;">{{COURSE_DESCRIPTION}}</p>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #92400e; margin: 0 0 15px 0;">What You'll Master:</h3>
            <ul style="color: #92400e; margin: 0; padding-left: 20px;">
              {{LEARNING_OUTCOMES}}
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">Investment</div>
            <div style="font-size: 36px; font-weight: bold; color: #1e3a8a; margin-bottom: 5px;">${{PRICE}}</div>
            <div style="font-size: 14px; color: #6b7280;">{{PAYMENT_TERMS}}</div>
          </div>
          
          <div style="text-align: center;">
            <a href="{{ENROLLMENT_URL}}" style="background: #dc2626; color: white; padding: 18px 40px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; font-size: 18px;">
              Enroll Now →
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f9fafb; border-radius: 8px;">
            <h4 style="color: #1e3a8a; margin: 0 0 10px 0;">Your Instructor</h4>
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              Kimal Honour Djam - PhD Medical Physics, U.S. Army Medical Officer, 
              Certified Leadership Coach with 20+ published works on peak performance and wealth creation.
            </p>
          </div>
        </main>
      </div>
    `,
    segments: ['course_interested', 'high_engagement', 'previous_customers']
  }
}

// Automated email sequences
export const EMAIL_SEQUENCES = {
  WELCOME_SERIES: {
    name: 'New Subscriber Welcome',
    emails: [
      {
        delay: 0, // Immediate
        subject: "Welcome to The Science of Success! (+ Your Free Guide)",
        template: 'welcome_immediate',
        deliverables: ['neuroscience_wealth_guide.pdf']
      },
      {
        delay: 3, // 3 days
        subject: "The #1 Mistake High-Achievers Make (And How to Fix It)",
        template: 'welcome_day_3',
        focus: 'value_delivery'
      },
      {
        delay: 7, // 1 week
        subject: "Your Weekly Success Blueprint is Here",
        template: 'welcome_week_1',
        focus: 'content_introduction'
      },
      {
        delay: 14, // 2 weeks
        subject: "Ready to Take Your Performance to the Next Level?",
        template: 'welcome_week_2',
        focus: 'course_introduction'
      }
    ]
  },
  
  BLOG_NURTURE: {
    name: 'Blog Reader Engagement',
    trigger: 'blog_visit',
    emails: [
      {
        delay: 1, // 1 day after blog visit
        subject: "Enjoyed that article? Here's what to read next...",
        template: 'blog_followup',
        personalization: 'related_articles'
      },
      {
        delay: 7, // 1 week
        subject: "The Science Behind Your Success (Weekly Roundup)",
        template: 'weekly_digest',
        focus: 'content_value'
      }
    ]
  },
  
  COURSE_LAUNCH: {
    name: 'Course Pre-Launch Sequence',
    emails: [
      {
        delay: -14, // 2 weeks before launch
        subject: "Something Big is Coming... (Early Access)",
        template: 'course_teaser',
        focus: 'anticipation_building'
      },
      {
        delay: -7, // 1 week before
        subject: "Early Bird Access: NeuroWealth Mastery Program",
        template: 'course_early_bird',
        focus: 'early_access_offer'
      },
      {
        delay: 0, // Launch day
        subject: "🚀 LIVE NOW: Transform Your Financial Future",
        template: 'course_launch',
        focus: 'enrollment_open'
      },
      {
        delay: 3, // 3 days after launch
        subject: "Last Chance: Early Bird Pricing Ends Tonight",
        template: 'course_urgency',
        focus: 'scarcity_urgency'
      }
    ]
  }
}

// Subscriber segmentation system
export const SUBSCRIBER_SEGMENTS = {
  ALL_SUBSCRIBERS: {
    name: 'All Subscribers',
    criteria: 'subscribed = true',
    description: 'Everyone on the email list'
  },
  
  BLOG_READERS: {
    name: 'Blog Readers',
    criteria: 'blog_visits > 3 AND last_blog_visit < 30_days',
    description: 'Active blog readers'
  },
  
  COURSE_INTERESTED: {
    name: 'Course Interested',
    criteria: 'course_page_visits > 1 OR course_email_clicks > 0',
    description: 'Showed interest in courses'
  },
  
  HIGH_ENGAGEMENT: {
    name: 'High Engagement',
    criteria: 'email_open_rate > 50% AND email_click_rate > 10%',
    description: 'Highly engaged subscribers'
  },
  
  WEALTH_FOCUSED: {
    name: 'Wealth & Finance Focus',
    criteria: 'wealth_content_engagement > 70%',
    description: 'Primarily interested in wealth content'
  },
  
  LEADERSHIP_FOCUSED: {
    name: 'Leadership Focus',
    criteria: 'leadership_content_engagement > 70%',
    description: 'Primarily interested in leadership content'
  },
  
  AI_TECH_FOCUSED: {
    name: 'AI & Technology Focus',
    criteria: 'ai_content_engagement > 70%',
    description: 'Primarily interested in AI and technology'
  }
}

// Analytics and performance tracking
export const EMAIL_METRICS = {
  BENCHMARKS: {
    open_rate: {
      excellent: '>35%',
      good: '25-35%',
      average: '15-25%',
      poor: '<15%'
    },
    click_rate: {
      excellent: '>5%',
      good: '3-5%',
      average: '1-3%',
      poor: '<1%'
    },
    unsubscribe_rate: {
      excellent: '<0.5%',
      good: '0.5-1%',
      average: '1-2%',
      poor: '>2%'
    }
  },
  
  TRACKING_EVENTS: [
    'email_sent',
    'email_delivered',
    'email_opened',
    'email_clicked',
    'email_unsubscribed',
    'email_bounced',
    'email_complained'
  ]
}

// Integration functions for automated workflows
export const createSubscriber = async (email, source, tags = []) => {
  const subscriberData = {
    email,
    source,
    tags: ['newsletter', ...tags],
    subscribed_at: new Date().toISOString(),
    double_opt_in: true,
    custom_fields: {
      source_page: source,
      signup_date: new Date().toISOString()
    }
  }
  
  // This would integrate with chosen email platform API
  console.log('Creating subscriber:', subscriberData)
  return subscriberData
}

export const sendAutomatedEmail = async (template, subscriber, customData = {}) => {
  const emailData = {
    to: subscriber.email,
    template: template,
    personalization: {
      first_name: subscriber.first_name || 'Friend',
      ...customData
    },
    tracking: {
      campaign: template,
      source: 'automated',
      timestamp: new Date().toISOString()
    }
  }
  
  // This would integrate with chosen email platform API
  console.log('Sending automated email:', emailData)
  return emailData
}

export const trackEmailEvent = async (event, subscriber, emailId, metadata = {}) => {
  const eventData = {
    event,
    subscriber_id: subscriber.id,
    email_id: emailId,
    timestamp: new Date().toISOString(),
    metadata
  }
  
  // This would integrate with analytics platform
  console.log('Tracking email event:', eventData)
  return eventData
}

// Blog-to-email automation
export const automateNewPostEmail = async (blogPost) => {
  const emailContent = {
    subject: `New Article: ${blogPost.title}`,
    template: NEWSLETTER_TEMPLATES.BLOG_NOTIFICATION.template,
    variables: {
      CATEGORY: blogPost.category,
      TITLE: blogPost.title,
      EXCERPT: blogPost.excerpt,
      PUBLISH_DATE: new Date(blogPost.publishDate).toLocaleDateString(),
      READ_TIME: blogPost.readTime,
      ARTICLE_URL: `https://kimalhonour.com/blog/${blogPost.slug}`
    },
    segments: ['blog_subscribers', 'all_subscribers']
  }
  
  // Send to all relevant segments
  console.log('Automating new post email:', emailContent)
  return emailContent
}

export default {
  EMAIL_PLATFORMS,
  NEWSLETTER_TEMPLATES,
  EMAIL_SEQUENCES,
  SUBSCRIBER_SEGMENTS,
  EMAIL_METRICS,
  createSubscriber,
  sendAutomatedEmail,
  trackEmailEvent,
  automateNewPostEmail
}
