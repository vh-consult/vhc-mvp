# Pharmacy Point of Sale (POS) System

A comprehensive, modern pharmacy management system built with Next.js 14, TypeScript, and Tailwind CSS. This system provides a complete solution for pharmacy operations including inventory management, customer management, prescription handling, and point-of-sale transactions.

## 🏥 Features

### Core Functionality
- **Point of Sale (POS)**: Complete transaction processing with receipt generation
- **Inventory Management**: Track stock levels, manage suppliers, and monitor expiring medications
- **Customer Management**: Comprehensive customer profiles and purchase history
- **Prescription Management**: Digital prescription handling and tracking
- **Reports & Analytics**: Detailed sales reports, inventory reports, and business insights
- **Settings & Configuration**: System settings, user management, and preferences

### Technical Features
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Reusable, well-documented components
- **State Management**: Efficient state handling with React hooks
- **Form Validation**: Comprehensive form validation and error handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vh-consult/vhc-mvp.git
   cd vhc-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
pharmacy-pos/
├── app/                    # Next.js 14 App Router
│   ├── customers/         # Customer management pages
│   ├── dashboard/         # Main dashboard
│   ├── inventory/         # Inventory management
│   ├── pos/              # Point of sale interface
│   ├── prescriptions/     # Prescription management
│   ├── reports/          # Reports and analytics
│   └── settings/         # System settings
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── main-header.tsx  # Main application header
│   ├── main-layout.tsx  # Main layout wrapper
│   └── main-sidebar.tsx # Navigation sidebar
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── public/             # Static assets
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Validation**: Zod

## 📱 Key Pages

### Dashboard (`/dashboard`)
- Overview of daily operations
- Quick stats and metrics
- Recent transactions
- System alerts and notifications

### Point of Sale (`/pos`)
- Product search and selection
- Cart management
- Payment processing
- Receipt generation
- Customer lookup

### Inventory (`/inventory`)
- Stock level monitoring
- Product management
- Supplier tracking
- Expiration date alerts
- Low stock notifications

### Customers (`/customers`)
- Customer database
- Purchase history
- Contact information
- Loyalty programs
- Customer analytics

### Prescriptions (`/prescriptions`)
- Digital prescription management
- Doctor information
- Medication tracking
- Prescription history
- Refill reminders

### Reports (`/reports`)
- Sales reports
- Inventory reports
- Customer analytics
- Financial summaries
- Export capabilities

### Settings (`/settings`)
- System configuration
- User management
- Payment settings
- Tax configuration
- Backup and restore

## 🎨 UI Components

The system uses a comprehensive set of UI components built with shadcn/ui:

- **Forms**: Input, Select, Checkbox, Radio Group, Textarea
- **Navigation**: Sidebar, Header, Dropdown Menu
- **Data Display**: Table, Card, Badge, Avatar
- **Feedback**: Alert Dialog, Toast, Skeleton
- **Layout**: Sheet, Dialog, Separator
- **Interactive**: Button, Switch, Tooltip

## 🔧 Development

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- TypeScript strict mode
- Component-based architecture

### Adding New Features
1. Create new pages in the `app/` directory
2. Add reusable components in `components/`
3. Update navigation in `main-sidebar.tsx`
4. Add proper TypeScript types
5. Include comprehensive comments

### Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **AWS**: EC2 or Lambda deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

## 🔮 Roadmap

- [ ] Multi-location support
- [ ] Advanced analytics dashboard
- [ ] Mobile app integration
- [ ] API for third-party integrations
- [ ] Advanced reporting features
- [ ] Automated inventory management
- [ ] Customer loyalty programs

## 📊 System Requirements

- **Minimum**: 4GB RAM, 2GB storage
- **Recommended**: 8GB RAM, 5GB storage
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+
- **Node.js**: 18.0.0 or higher

---

**Built with ❤️ for modern pharmacy management**