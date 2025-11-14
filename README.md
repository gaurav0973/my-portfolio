# 🚀 My Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This portfolio showcases your work, experience, projects, and provides a way to connect with potential employers or clients.

![Next.js](https://img.shields.io/badge/Next.js-16.0.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 🌓 **Dark/Light Mode** - Theme switching with next-themes
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- 🚀 **Quick Setup** - One file change and commit => your portfolio website is ready
- 🎯 **Fully Customizable** - Easy to customize to reflect your personal brand
- 🎯 **Sections Include:**
  - **Header** - Introduction and hero section
  - **Experience** - Work experience timeline
  - **Featured Projects** - Showcase your best projects
  - **Content Tabs** - Organized content sections
    - Projects - All your projects
    - Blogs - Your blog posts and articles
    - Proof of Work - Achievements and certifications
    - Contact - Get in touch form and information
  - **Footer** - Social links and copyright
- 📊 **Analytics** - Integrated with Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights)
- **Notifications:** [react-hot-toast](https://react-hot-toast.com/)


## 🚀 Quick Start (Setup in Minutes!)

### 1. Clone the Repository

```bash
git clone https://github.com/gaurav0973/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
npm install
```

### 3. Customize Your Content

Edit the constants file to update your personal information:

```typescript
// constants/constants.ts
// Update with your information here!
```

### 4. Run the Development Server

```bash
# Using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio! 🎉

### 5. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gaurav0973/my-portfolio)

1. Push your changes to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your portfolio is live! 🚀

**That's it! Your portfolio is now live in just a few minutes!**

## 📁 Project Structure

```
my-portfolio/
├── app/                         
│   ├── (contentTabs)/            
│   │   ├── Blogs/               
│   │   ├── Contact/            
│   │   ├── Projects/            
│   │   └── ProofOfWork/        
│   ├── ContentTabs/             
│   ├── Experience/              
│   ├── FeaturedProjects/        
│   ├── Footer/                  
│   ├── Header/                  
│   ├── globals.css              
│   ├── layout.tsx               
│   └── page.tsx                 # 🛑start exploring the flow from here
├── components/                  
│   ├── ui/                     
│   │   ├── button.tsx
│   │   └── dropdown-menu.tsx
│   └── theme-provider.tsx      
├── constants/                   
│   └── constants.ts             # 👈 UPDATE THIS FILE WITH YOUR INFO
├── lib/                       
│   └── utils.ts
├── public/                      
├── components.json             
├── next.config.ts              
├── tailwind.config.js          
├── tsconfig.json                
└── package.json                 
```

## 🎨 Customization Guide

### Step 1: Update Personal Information

Edit the `constants/constants.ts` file to update your:

- Name and title
- Bio and introduction
- Work experience
- Projects
- Social media links
- Contact information

```typescript
// constants/constants.ts
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio here...",
  // ... add more details
};
```

### Step 2: Modify Content Sections

Each section has its own page component that you can customize:

- **Header:** `app/Header/page.tsx` - Update your introduction
- **Experience:** `app/Experience/page.tsx` - Add your work experience
- **Projects:** `app/FeaturedProjects/page.tsx` and `app/(contentTabs)/Projects/page.tsx`
- **Blogs:** `app/(contentTabs)/Blogs/page.tsx` - Add your blog posts
- **Contact:** `app/(contentTabs)/Contact/page.tsx` - Update contact form
- **Footer:** `app/Footer/page.tsx` - Add your social links



## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gaurav0973/my-portfolio/issues).

### How to Contribute

1. **Fork** the project
2. **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gaurav Maurya**

- GitHub: [@gaurav0973](https://github.com/gaurav0973)
- Twitter: [@gauravkmaurya09](https://x.com/gauravkmaurya09)

## 💬 Feedback & Support

- If you created your website using this template, I'd be happy to see it! Please share it on Twitter and tag me [@gauravkmaurya09](https://x.com/gauravkmaurya09) 🙌
- If you have any questions or need help, feel free to reach out on Twitter [@gauravkmaurya09](https://x.com/gauravkmaurya09)
- Found a bug? [Open an issue](https://github.com/gaurav0973/my-portfolio/issues)
- Have a feature request? [Open an issue](https://github.com/gaurav0973/my-portfolio/issues)

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐️ on GitHub!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Vercel](https://vercel.com/) - Deployment platform
- [Lucide](https://lucide.dev/) - Beautiful icons
- All the amazing open-source contributors!
---

<div align="center">

**Made with ❤️ by [Gaurav Maurya](https://github.com/gaurav0973)**

If this helped you, please ⭐ star this repository!

</div>
