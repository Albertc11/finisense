"use client"

import { useState } from "react"
import {
  TrendingUp,
  Upload,
  PieChart,
  Target,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Bell,
  Award,
  AlertTriangle,
  BarChart3,
  FileText,
  Activity,
  Star,
  Zap,
  Trophy,
  Flame,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Import page components
import InvestmentPage from "./components/investment-page"
import TransactionsPage from "./components/transactions-page"
import BudgetingPage from "./components/budgeting-page"
import CashflowPage from "./components/cashflow-page"
import GoalsPage from "./components/goals-page"
import ReportsPage from "./components/reports-page"
import AchievementsPage from "./components/achievements-page"
import ProfilePage from "./components/profile-page"

export default function SmartWealthDashboard() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [currentPage, setCurrentPage] = useState("dashboard")

  const currencies = ["USD", "HKD", "TWD", "AUD", "JPY", "KRW"]

  // Gamification Data
  const userLevel = {
    current: 5,
    xp: 1200,
    xpToNext: 1500,
    title: "Budget Master",
  }

  const currentStreak = {
    type: "savings",
    count: 3,
    description: "months of consistent saving",
  }

  const activeChallenges = [
    {
      id: 1,
      title: "No Takeout Week",
      description: "Spend less than $50 on takeout this week",
      progress: 65,
      reward: "50 XP + Dining Discipline Badge",
      timeLeft: "3 days",
      type: "weekly",
    },
    {
      id: 2,
      title: "Coffee Cutter",
      description: "Reduce coffee spending by 10% this month",
      progress: 30,
      reward: "75 XP + Caffeine Controller Badge",
      timeLeft: "18 days",
      type: "monthly",
    },
  ]

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "cashflow", label: "Cash Flow", icon: Activity },
    { id: "budgeting", label: "Budgeting", icon: PieChart },
    { id: "goals", label: "Goals", icon: Target },
    { id: "investments", label: "Investments", icon: TrendingUp },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "achievements", label: "Achievements", icon: Award },
  ]

  const accounts = [
    { name: "Chase Checking", balance: 12450, type: "checking", change: 2.3 },
    { name: "Savings Account", balance: 45200, type: "savings", change: 1.2 },
    { name: "Investment Portfolio", balance: 89750, type: "investment", change: -0.8 },
    { name: "Credit Card", balance: -2340, type: "credit", change: 0 },
  ]

  const budgets = [
    { category: "Food & Dining", spent: 850, budget: 1200, color: "bg-red-500" },
    { category: "Transportation", spent: 320, budget: 500, color: "bg-blue-500" },
    { category: "Entertainment", spent: 180, budget: 300, color: "bg-green-500" },
    { category: "Shopping", spent: 420, budget: 600, color: "bg-purple-500" },
    { category: "Utilities", spent: 280, budget: 350, color: "bg-orange-500" },
  ]

  const goals = [
    { name: "Emergency Fund", current: 15000, target: 25000, deadline: "Dec 2024" },
    { name: "Vacation to Japan", current: 3200, target: 5000, deadline: "Jun 2024" },
    { name: "New Car Down Payment", current: 8500, target: 15000, deadline: "Sep 2024" },
  ]

  const recentTransactions = [
    { description: "Starbucks Coffee", amount: -5.85, category: "Food & Dining", date: "Today" },
    { description: "Salary Deposit", amount: 4200, category: "Income", date: "Yesterday" },
    { description: "Netflix Subscription", amount: -15.99, category: "Entertainment", date: "2 days ago" },
    { description: "Grocery Store", amount: -127.43, category: "Food & Dining", date: "3 days ago" },
    { description: "Gas Station", amount: -45.2, category: "Transportation", date: "3 days ago" },
  ]

  const achievements = [
    { name: "Budget Master", description: "Stayed under budget for 3 months", xp: 500, icon: "🏆", rarity: "gold" },
    { name: "Savings Streak", description: "Saved money for 30 days straight", xp: 300, icon: "🔥", rarity: "silver" },
    { name: "Goal Crusher", description: "Completed your first financial goal", xp: 750, icon: "🎯", rarity: "gold" },
  ]

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "investments":
        return <InvestmentPage />
      case "transactions":
        return <TransactionsPage />
      case "budgeting":
        return <BudgetingPage />
      case "cashflow":
        return <CashflowPage />
      case "goals":
        return <GoalsPage />
      case "reports":
        return <ReportsPage />
      case "achievements":
        return <AchievementsPage />
      case "profile":
        return <ProfilePage />
      default:
        return renderDashboard()
    }
  }

  const renderDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section with Gamification */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
            <p className="text-gray-600">Here's your financial overview for this month.</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Level & XP Display */}
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-lg" style={{ color: "#00355f" }}>
                  Level {userLevel.current}
                </span>
              </div>
              <p className="text-sm text-gray-600">{userLevel.title}</p>
            </div>
            <div className="w-32">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>{userLevel.xp} XP</span>
                <span>{userLevel.xpToNext} XP</span>
              </div>
              <Progress value={(userLevel.xp / userLevel.xpToNext) * 100} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Gamification Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Current Streak */}
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-2xl text-orange-600">{currentStreak.count}</p>
                <p className="text-sm text-gray-600 capitalize">{currentStreak.description}</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  🔥 {currentStreak.type} streak
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-2xl text-purple-600">{activeChallenges.length}</p>
                <p className="text-sm text-gray-600">Active challenges</p>
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto text-xs mt-1"
                  onClick={() => setCurrentPage("achievements")}
                >
                  View all challenges
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent XP Earned */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-2xl text-green-600">+125</p>
                <p className="text-sm text-gray-600">XP earned this week</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  ⚡ Great progress!
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Challenges Preview */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-purple-600" />
                <span>Active Challenges</span>
              </CardTitle>
              <CardDescription>Complete challenges to earn XP and unlock badges</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCurrentPage("achievements")}>
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeChallenges.map((challenge) => (
              <div key={challenge.id} className="p-4 rounded-lg bg-gray-50 border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                  <Badge variant={challenge.type === "weekly" ? "default" : "secondary"} className="text-xs">
                    {challenge.type}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Reward: {challenge.reward}</span>
                    <span>{challenge.timeLeft} left</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Net Worth Card */}
      <Card className="mb-8 border-2" style={{ borderColor: "#00355f" }}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Net Worth</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-900 mb-2">${(145060).toLocaleString()}</div>
          <div className="flex items-center text-sm text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>+$2,340 (+1.6%) this month</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Accounts Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Accounts</CardTitle>
              <CardDescription>Your connected accounts and balances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00355f" }}
                      >
                        {account.type === "checking" && <Wallet className="w-5 h-5 text-white" />}
                        {account.type === "savings" && <PieChart className="w-5 h-5 text-white" />}
                        {account.type === "investment" && <TrendingUp className="w-5 h-5 text-white" />}
                        {account.type === "credit" && <CreditCard className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{account.name}</p>
                        <p className="text-sm text-gray-500 capitalize">{account.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${account.balance < 0 ? "text-red-600" : "text-gray-900"}`}>
                        ${Math.abs(account.balance).toLocaleString()}
                      </p>
                      {account.change !== 0 && (
                        <p
                          className={`text-sm flex items-center ${account.change > 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {account.change > 0 ? (
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3 mr-1" />
                          )}
                          {Math.abs(account.change)}%
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Bank Statement
                <Badge variant="secondary" className="ml-2 text-xs">
                  +25 XP
                </Badge>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.amount > 0 ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Transactions
              </Button>
            </CardContent>
          </Card>

          {/* Cash Flow Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow</CardTitle>
              <CardDescription>Income vs expenses over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Cash flow chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Budget Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Budget Overview</CardTitle>
              <CardDescription>This month's spending by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgets.map((budget, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{budget.category}</span>
                      <span className="text-gray-500">
                        ${budget.spent} / ${budget.budget}
                      </span>
                    </div>
                    <Progress value={(budget.spent / budget.budget) * 100} className="h-2" />
                    {budget.spent > budget.budget * 0.9 && (
                      <div className="flex items-center text-xs text-orange-600">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Near budget limit
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Add Budget Category
                <Badge variant="secondary" className="ml-2 text-xs">
                  +15 XP
                </Badge>
              </Button>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Goals</CardTitle>
              <CardDescription>Track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm">{goal.name}</p>
                        <p className="text-xs text-gray-500">Due {goal.deadline}</p>
                      </div>
                      <Target className="w-4 h-4 text-gray-400" />
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>${goal.current.toLocaleString()}</span>
                      <span>${goal.target.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Create New Goal
                <Badge variant="secondary" className="ml-2 text-xs">
                  +20 XP
                </Badge>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Your financial milestones</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => setCurrentPage("achievements")}>
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.rarity === "gold"
                          ? "bg-yellow-100 border-2 border-yellow-300"
                          : "bg-gray-100 border-2 border-gray-300"
                      }`}
                    >
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{achievement.name}</p>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={achievement.rarity === "gold" ? "bg-yellow-100 text-yellow-800" : ""}
                    >
                      +{achievement.xp} XP
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card>
            <CardHeader>
              <CardTitle>AI Financial Assistant</CardTitle>
              <CardDescription>Get personalized insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 You're spending 15% more on dining out this month. Consider setting a stricter budget to reach
                    your vacation goal faster.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800">
                    🎉 Great job! You're on track to exceed your savings goal by $200 this month.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-sm text-purple-800">
                    🏆 Complete the "No Takeout Week" challenge to earn 50 XP and unlock the Dining Discipline badge!
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4" style={{ backgroundColor: "#00355f" }}>
                Ask AI Assistant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Upload className="w-6 h-6" />
          <span className="text-sm">Upload Statement</span>
          <Badge variant="secondary" className="text-xs">
            +25 XP
          </Badge>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Plus className="w-6 h-6" />
          <span className="text-sm">Add Transaction</span>
          <Badge variant="secondary" className="text-xs">
            +5 XP
          </Badge>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Target className="w-6 h-6" />
          <span className="text-sm">Set Goal</span>
          <Badge variant="secondary" className="text-xs">
            +20 XP
          </Badge>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <PieChart className="w-6 h-6" />
          <span className="text-sm">View Reports</span>
          <Badge variant="secondary" className="text-xs">
            +10 XP
          </Badge>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "#00355f" }}>
                  <Wallet className="w-5 h-5 text-white m-1.5" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">SmartWealth Global</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm font-sans"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage("profile")}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Level {userLevel.current}</p>
                    <p className="text-xs text-gray-500">
                      {userLevel.xp}/{userLevel.xpToNext} XP
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={cn(
                    "flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap",
                    currentPage === item.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  )}
                  style={{
                    borderBottomColor: currentPage === item.id ? "#00355f" : undefined,
                    color: currentPage === item.id ? "#00355f" : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderCurrentPage()}
    </div>
  )
}
