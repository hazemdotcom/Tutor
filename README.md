# Tutor Platform

A comprehensive web application for connecting tutors, students, and parents with features for course management, assignments, quizzes, invoices, and video meetings.

## 🚀 Features

### Role-Based Dashboards
- **Tutor Dashboard**: Manage courses, assignments, quizzes, and student sessions
- **Student Dashboard**: View courses, submit assignments, track progress, join meetings
- **Parent Dashboard**: Monitor children's progress, view invoices, manage payments
- **Admin Dashboard**: Platform overview, user management, financial reports

### Core Functionality
- 📚 Course Management
- 📝 Assignment & Quiz System
- 📅 Calendar & Scheduling
- 💰 Invoice & Payment Tracking
- 📁 Document Management
- 🎥 Video Meeting Integration
- 📊 Progress Tracking & Analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tutor-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Demo Accounts

For testing purposes, use these demo accounts:

- **Tutor**: `tutor@demo.com` → `/dashboard/tutor`
- **Student**: `student@demo.com` → `/dashboard/student`
- **Parent**: `parent@demo.com` → `/dashboard/parent`
- **Admin**: `admin@demo.com` → `/dashboard/admin`

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── tutor/
│   │   │   ├── page.tsx              # Tutor dashboard
│   │   │   ├── courses/
│   │   │   └── assignments/
│   │   ├── student/
│   │   │   └── page.tsx              # Student dashboard
│   │   ├── parent/
│   │   │   └── page.tsx              # Parent dashboard
│   │   └── admin/
│   │       └── page.tsx              # Admin dashboard
│   ├── login/
│   │   └── page.tsx                  # Login page
│   ├── register/
│   │   └── page.tsx                  # Registration page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Landing page
├── components/
│   ├── ui/                           # Shadcn UI components
│   └── layout/
│       ├── navigation.tsx            # Navigation component
│       └── dashboard-layout.tsx      # Dashboard layout wrapper
└── lib/
    └── utils.ts                      # Utility functions
```

## 🎨 UI Components

The application uses Shadcn UI components for a consistent and modern design:

- **Cards**: For displaying content sections
- **Buttons**: Various button styles and states
- **Forms**: Input fields, labels, and form controls
- **Navigation**: Sidebar and top navigation
- **Progress**: Progress bars and indicators
- **Modals**: Dialog components for interactions

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktop computers

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/dashboard/[role]/`
2. Add a `page.tsx` file with your component
3. Update the navigation in `src/components/layout/navigation.tsx`

### Styling
- Use TailwindCSS classes for styling
- Follow the existing design patterns
- Use Shadcn UI components for consistency

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in the appropriate dashboard directory
3. Update navigation and routing as needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for code formatting
- Write meaningful component and variable names

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Built with ❤️ using Next.js, TailwindCSS, and Shadcn UI**
