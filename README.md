oakterminallc

## Email Setup Instructions

To enable the contact form to send emails through your Hostinger email hosting:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service

### Step 2: Configure EmailJS with Hostinger SMTP
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Custom SMTP"
4. Enter your Hostinger SMTP settings:
   - **SMTP Server**: smtp.hostinger.com
   - **Port**: 587
   - **Username**: info@oakmar-terminalllc.com
   - **Password**: [Your email password]
   - **Secure**: No (for port 587)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Phone number
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (info@oakmar-terminalllc.com)

### Step 4: Update Configuration
1. Copy your Service ID, Template ID, and Public Key from EmailJS
2. Update the values in `src/pages/Contact.tsx`:
   - Replace `YOUR_SERVICE_ID` with your actual Service ID
   - Replace `YOUR_TEMPLATE_ID` with your actual Template ID  
   - Replace `YOUR_PUBLIC_KEY` with your actual Public Key

### Step 5: Test
1. Deploy your website
2. Test the contact form
3. Check that emails arrive at info@oakmar-terminalllc.com

**Note**: EmailJS free tier allows 200 emails per month, which should be sufficient for most contact forms.