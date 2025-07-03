"use client"

import { useState } from "react"
import {
  Target,
  Plus,
  Edit,
  Trash2,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function GoalsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const goalCategories = ["all", "savings", "debt", "investment", "purchase", "emergency"]

  const goals = [
    {
      id: 1,
      name: "Emergency Fund",
      description: "Build a 6-month emergency fund for financial security",
      category: "emergency",
      targetAmount: 25000,
      currentAmount: 15000,
      monthlyContribution: 500,
      deadline: "2024-12-31",
      status: "on-track",
      priority: "high",
      createdDate: "2024-01-01",
      estimatedCompletion: "2024-11-15",
    },
    {
      id: 2,
      name: "Vacation to Japan",
      description: "Save for a 2-week trip to Japan including flights and accommodation",
      category: "purchase",
      targetAmount: 5000,
      currentAmount: 3200,
      monthlyContribution: 300,
      deadline: "2024-06-01",
      status: "at-risk",
      priority: "medium",
      createdDate: "2023-12-01",
      estimatedCompletion: "2024-07-15",
    },
    {
      id: 3,
      name: "New Car Down Payment",
      description: "Save for a 20% down payment on a new car",
      category: "purchase",
      targetAmount: 15000,
      currentAmount: 8500,
      monthlyContribution: 650,
      deadline: "2024-09-01",
      status: "on-track",
      priority: "high",
      createdDate: "2023-10-01",
      estimatedCompletion: "2024-08-20",
    },
    {
      id: 4,
      name: "Pay Off Credit Card",
      description: "Eliminate credit card debt completely",
      category: "debt",
      targetAmount: 3500,
      currentAmount: 1200,
      monthlyContribution: 400,
      deadline: "2024-08-01",
      status: "ahead",
      priority: "high",
      createdDate: "2024-01-15",
      estimatedCompletion: "2024-06-30",
    },
    {
      id: 5,
      name: "Investment Portfolio",
      description: "Build a diversified investment portfolio",
      category: "investment",
      targetAmount: 50000,
      currentAmount: 12500,
      monthlyContribution: 800,
      deadline: "2026-12-31",
      status: "on-track",
      priority: "medium",
      createdDate: "2023-06-01",
      estimatedCompletion: "2026-10-15",
    },
    {
      id: 6,
      name: "Home Down Payment",
      description: "Save for a 20% down payment on a house",
      category: "purchase",
      targetAmount: 80000,
      currentAmount: 5000,
      monthlyContribution: 1200,
      deadline: "2027-06-01",
      status: "behind",
      priority: "high",
      createdDate: "2024-01-01",
      estimatedCompletion: "2028-02-15",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 border-green-200"
      case "ahead":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "on-track":
        return "text-green-600 bg-green-50 border-green-200"
      case "at-risk":
        return "text-orange-600 bg-orange-50 border-orange-200"
      case "behind":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "ahead":
        return <TrendingUp className="w-4 h-4" />
      case "on-track":
        return <Target className="w-4 h-4" />
      case "at-risk":
        return <AlertTriangle className="w-4 h-4" />
      case "behind":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Target className="w-4 h-4" />
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "ahead":
        return "Ahead of Schedule"
      case "on-track":
        return "On Track"
      case "at-risk":
        return "At Risk"
      case "behind":
        return "Behind Schedule"
      default:
        return status
    }
  }

  const filteredGoals = goals.filter((goal) => selectedCategory === "all" || goal.category === selectedCategory)

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100)
  }

  const calculateMonthsRemaining = (deadline: string) => {
    const today = new Date()
    const deadlineDate = new Date(deadline)
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
    return Math.max(diffMonths, 0)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Goals</h2>
        <p className="text-gray-600">Set, track, and achieve your financial objectives with AI-powered insights.</p>
      </div>

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{goals.length}</div>
            <div className="text-sm text-gray-500">Active goals</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">On Track</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {goals.filter((g) => g.status === "on-track" || g.status === "ahead").length}
            </div>
            <div className="text-sm text-gray-500">Goals progressing well</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ${goals.reduce((sum, goal) => sum + goal.targetAmount, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Combined goal value</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${goals.reduce((sum, goal) => sum + goal.currentAmount, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Progress so far</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Filter by category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="all">All Categories</option>
                <option value="savings">Savings</option>
                <option value="debt">Debt Payoff</option>
                <option value="investment">Investment</option>
                <option value="purchase">Purchase</option>
                <option value="emergency">Emergency Fund</option>
              </select>
            </div>
            <Button style={{ backgroundColor: "#00355f" }}>
              <Plus className="w-4 h-4 mr-2" />
              Create New Goal
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredGoals.map((goal) => (
          <Card key={goal.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-lg">{goal.name}</CardTitle>
                    <Badge variant="outline" className={`${getStatusColor(goal.status)} border text-xs`}>
                      {getStatusIcon(goal.status)}
                      <span className="ml-1">{getStatusLabel(goal.status)}</span>
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{goal.description}</CardDescription>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="text-gray-500">
                      {calculateProgress(goal.currentAmount, goal.targetAmount).toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={calculateProgress(goal.currentAmount, goal.targetAmount)} className="h-3" />
                </div>

                {/* Amount Progress */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${goal.currentAmount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">of ${goal.targetAmount.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600">
                      ${(goal.targetAmount - goal.currentAmount).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">remaining</p>
                  </div>
                </div>

                {/* Goal Details */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>Monthly: ${goal.monthlyContribution}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{calculateMonthsRemaining(goal.deadline)} months left</span>
                    </div>
                  </div>
                </div>

                {/* Status-specific Messages */}
                {goal.status === "at-risk" && (
                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <p className="text-sm text-orange-800">
                      ⚠️ You may miss your deadline. Consider increasing your monthly contribution to $
                      {Math.ceil((goal.targetAmount - goal.currentAmount) / calculateMonthsRemaining(goal.deadline))}.
                    </p>
                  </div>
                )}

                {goal.status === "behind" && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-800">
                      🚨 You're behind schedule. Consider increasing your monthly contribution or extending your
                      deadline.
                    </p>
                  </div>
                )}

                {goal.status === "ahead" && (
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      🎉 Great job! You're ahead of schedule and could reach your goal by {goal.estimatedCompletion}.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Goal Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Goal Insights</CardTitle>
            <CardDescription>AI-powered recommendations for your goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Excellent Progress!</p>
                    <p className="text-sm text-green-700 mt-1">
                      Your credit card payoff goal is ahead of schedule. You could be debt-free 2 months early!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Optimization Opportunity</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Consider redirecting $200 from your emergency fund to your Japan vacation goal to meet the
                      deadline.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-orange-800">Goal Conflict Detected</p>
                    <p className="text-sm text-orange-700 mt-1">
                      Your home down payment goal may conflict with other priorities. Consider adjusting the timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goal Achievement Timeline</CardTitle>
            <CardDescription>Projected completion dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals
                .filter((goal) => goal.status !== "completed")
                .sort((a, b) => new Date(a.estimatedCompletion).getTime() - new Date(b.estimatedCompletion).getTime())
                .slice(0, 5)
                .map((goal, index) => (
                  <div key={goal.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{goal.name}</p>
                      <p className="text-sm text-gray-500">Est. completion: {goal.estimatedCompletion}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">${goal.targetAmount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
