"use client"

import { useState } from "react"
import { Plus, Edit, AlertTriangle, TrendingUp, TrendingDown, PieChart, Target, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function BudgetingPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  const budgetOverview = {
    totalBudget: 4500,
    totalSpent: 3280,
    remaining: 1220,
    percentUsed: 72.9,
  }

  const budgets = [
    {
      id: 1,
      category: "Food & Dining",
      budgeted: 1200,
      spent: 850,
      remaining: 350,
      percentUsed: 70.8,
      trend: "up",
      trendPercent: 15,
      status: "on-track",
      transactions: 24,
    },
    {
      id: 2,
      category: "Transportation",
      budgeted: 500,
      spent: 320,
      remaining: 180,
      percentUsed: 64.0,
      trend: "down",
      trendPercent: 8,
      status: "on-track",
      transactions: 12,
    },
    {
      id: 3,
      category: "Entertainment",
      budgeted: 300,
      spent: 280,
      remaining: 20,
      percentUsed: 93.3,
      trend: "up",
      trendPercent: 25,
      status: "warning",
      transactions: 18,
    },
    {
      id: 4,
      category: "Shopping",
      budgeted: 600,
      spent: 720,
      remaining: -120,
      percentUsed: 120.0,
      trend: "up",
      trendPercent: 40,
      status: "over-budget",
      transactions: 15,
    },
    {
      id: 5,
      category: "Utilities",
      budgeted: 350,
      spent: 280,
      remaining: 70,
      percentUsed: 80.0,
      trend: "down",
      trendPercent: 5,
      status: "on-track",
      transactions: 6,
    },
    {
      id: 6,
      category: "Healthcare",
      budgeted: 400,
      spent: 150,
      remaining: 250,
      percentUsed: 37.5,
      trend: "down",
      trendPercent: 20,
      status: "under-budget",
      transactions: 3,
    },
    {
      id: 7,
      category: "Education",
      budgeted: 200,
      spent: 0,
      remaining: 200,
      percentUsed: 0,
      trend: "neutral",
      trendPercent: 0,
      status: "unused",
      transactions: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "over-budget":
        return "text-red-600 bg-red-50 border-red-200"
      case "warning":
        return "text-orange-600 bg-orange-50 border-orange-200"
      case "on-track":
        return "text-green-600 bg-green-50 border-green-200"
      case "under-budget":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "unused":
        return "text-gray-600 bg-gray-50 border-gray-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "over-budget":
        return "Over Budget"
      case "warning":
        return "Near Limit"
      case "on-track":
        return "On Track"
      case "under-budget":
        return "Under Budget"
      case "unused":
        return "Unused"
      default:
        return status
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Budget Management</h2>
        <p className="text-gray-600">Set spending limits, track progress, and stay on top of your finances.</p>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">${budgetOverview.totalBudget.toLocaleString()}</div>
            <div className="text-sm text-gray-500">This month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">${budgetOverview.totalSpent.toLocaleString()}</div>
            <div className="text-sm text-gray-500">{budgetOverview.percentUsed}% of budget</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${budgetOverview.remaining.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Available to spend</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Budget Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Good</div>
            <div className="text-sm text-gray-500">On track this month</div>
          </CardContent>
        </Card>
      </div>

      {/* Period Selector */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-900">Budget Period:</span>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <Button style={{ backgroundColor: "#00355f" }}>
              <Plus className="w-4 h-4 mr-2" />
              Create Budget
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Budget Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {budgets.map((budget) => (
          <Card
            key={budget.id}
            className={`border-l-4 ${
              getStatusColor(budget.status).includes("red")
                ? "border-l-red-500"
                : getStatusColor(budget.status).includes("orange")
                  ? "border-l-orange-500"
                  : getStatusColor(budget.status).includes("green")
                    ? "border-l-green-500"
                    : getStatusColor(budget.status).includes("blue")
                      ? "border-l-blue-500"
                      : "border-l-gray-500"
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{budget.category}</CardTitle>
                  <CardDescription>{budget.transactions} transactions this month</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getStatusColor(budget.status)} border`}>{getStatusLabel(budget.status)}</Badge>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${budget.spent.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">of ${budget.budgeted.toLocaleString()}</span>
                </div>

                <Progress value={Math.min(budget.percentUsed, 100)} className="h-3" />

                <div className="flex justify-between items-center text-sm">
                  <div className={`flex items-center ${budget.remaining >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {budget.remaining >= 0 ? (
                      <>
                        <span>${budget.remaining.toLocaleString()} remaining</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        <span>${Math.abs(budget.remaining).toLocaleString()} over budget</span>
                      </>
                    )}
                  </div>
                  <div
                    className={`flex items-center ${budget.trend === "up" ? "text-red-600" : budget.trend === "down" ? "text-green-600" : "text-gray-600"}`}
                  >
                    {budget.trend === "up" && <TrendingUp className="w-4 h-4 mr-1" />}
                    {budget.trend === "down" && <TrendingDown className="w-4 h-4 mr-1" />}
                    {budget.trend !== "neutral" && (
                      <span>
                        {budget.trend === "up" ? "+" : "-"}
                        {budget.trendPercent}% vs last month
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Budget Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Budget Insights</CardTitle>
            <CardDescription>AI-powered recommendations for your spending</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Shopping Budget Exceeded</p>
                    <p className="text-sm text-red-700 mt-1">
                      You've spent $120 over your shopping budget. Consider reducing discretionary purchases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-orange-800">Entertainment Near Limit</p>
                    <p className="text-sm text-orange-700 mt-1">
                      You've used 93% of your entertainment budget with 8 days left in the month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Great Progress on Healthcare</p>
                    <p className="text-sm text-green-700 mt-1">
                      You're well under budget for healthcare expenses. Consider allocating some funds to your emergency
                      fund.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <PieChart className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Budget Optimization Tip</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Your transportation costs are down 8% this month. Great job using public transport more often!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spending Trends</CardTitle>
            <CardDescription>How your spending has changed over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Spending trends chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your budgets efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <Plus className="w-6 h-6" />
              <span className="text-sm">Create Budget</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <Edit className="w-6 h-6" />
              <span className="text-sm">Edit Categories</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <Target className="w-6 h-6" />
              <span className="text-sm">Set Goals</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <PieChart className="w-6 h-6" />
              <span className="text-sm">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
