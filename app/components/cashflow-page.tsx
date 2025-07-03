"use client"

import { useState } from "react"
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  DollarSign,
  Activity,
  AlertTriangle,
  Plus,
  Edit,
  Trash2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CashflowPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedView, setSelectedView] = useState("overview")

  const cashflowSummary = {
    totalIncome: 5050,
    totalExpenses: 3280,
    netCashflow: 1770,
    projectedIncome: 5200,
    projectedExpenses: 3450,
    projectedNetCashflow: 1750,
  }

  const monthlyData = [
    { month: "Jan", income: 4800, expenses: 3200, net: 1600 },
    { month: "Feb", income: 5200, expenses: 3100, net: 2100 },
    { month: "Mar", income: 4900, expenses: 3400, net: 1500 },
    { month: "Apr", income: 5100, expenses: 3300, net: 1800 },
    { month: "May", income: 5050, expenses: 3280, net: 1770 },
  ]

  const recurringItems = [
    {
      type: "income",
      description: "Salary",
      amount: 4200,
      frequency: "Monthly",
      nextDate: "2024-02-01",
      confidence: "high",
    },
    {
      type: "income",
      description: "Freelance Work",
      amount: 850,
      frequency: "Monthly",
      nextDate: "2024-02-15",
      confidence: "medium",
    },
    {
      type: "expense",
      description: "Rent",
      amount: -1200,
      frequency: "Monthly",
      nextDate: "2024-02-01",
      confidence: "high",
    },
    {
      type: "expense",
      description: "Car Payment",
      amount: -350,
      frequency: "Monthly",
      nextDate: "2024-02-05",
      confidence: "high",
    },
    {
      type: "expense",
      description: "Insurance",
      amount: -180,
      frequency: "Monthly",
      nextDate: "2024-02-10",
      confidence: "high",
    },
    {
      type: "expense",
      description: "Netflix",
      amount: -15.99,
      frequency: "Monthly",
      nextDate: "2024-02-13",
      confidence: "high",
    },
    {
      type: "expense",
      description: "Gym Membership",
      amount: -45,
      frequency: "Monthly",
      nextDate: "2024-02-20",
      confidence: "medium",
    },
  ]

  const upcomingTransactions = [
    { date: "2024-02-01", description: "Salary Deposit", amount: 4200, type: "income", confidence: "confirmed" },
    { date: "2024-02-01", description: "Rent Payment", amount: -1200, type: "expense", confidence: "confirmed" },
    { date: "2024-02-05", description: "Car Payment", amount: -350, type: "expense", confidence: "confirmed" },
    { date: "2024-02-10", description: "Insurance Premium", amount: -180, type: "expense", confidence: "confirmed" },
    {
      date: "2024-02-13",
      description: "Netflix Subscription",
      amount: -15.99,
      type: "expense",
      confidence: "predicted",
    },
    { date: "2024-02-15", description: "Freelance Payment", amount: 850, type: "income", confidence: "predicted" },
    { date: "2024-02-20", description: "Gym Membership", amount: -45, type: "expense", confidence: "predicted" },
  ]

  const alerts = [
    {
      type: "warning",
      title: "Unusual Spending Detected",
      message: "Your entertainment spending is 25% higher than usual this month.",
      action: "Review transactions",
    },
    {
      type: "info",
      title: "Positive Cash Flow Trend",
      message: "Your net cash flow has improved by 12% compared to last month.",
      action: "View details",
    },
    {
      type: "alert",
      title: "Large Expense Coming Up",
      message: "You have a $1,200 rent payment due in 3 days.",
      action: "Ensure sufficient funds",
    },
  ]

  const renderCurrentView = () => {
    switch (selectedView) {
      case "forecast":
        return renderForecastView()
      case "recurring":
        return renderRecurringView()
      default:
        return renderOverviewView()
    }
  }

  const renderOverviewView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        {/* Cash Flow Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Trend</CardTitle>
            <CardDescription>Income vs expenses over the last 5 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Cash flow chart will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Breakdown</CardTitle>
            <CardDescription>Detailed view of recent months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{month.month} 2024</p>
                      <p className="text-sm text-gray-500">
                        Income: ${month.income.toLocaleString()} | Expenses: ${month.expenses.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${month.net >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {month.net >= 0 ? "+" : ""}${month.net.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">Net flow</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar - same as before */}
      <div className="space-y-8">
        {/* Forecast Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Next Month Forecast</CardTitle>
            <CardDescription>AI-powered predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Projected Income</span>
                <span className="font-semibold text-green-600">
                  ${cashflowSummary.projectedIncome.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Projected Expenses</span>
                <span className="font-semibold text-red-600">
                  ${cashflowSummary.projectedExpenses.toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Net Cash Flow</span>
                  <span className="font-bold text-blue-600">
                    ${cashflowSummary.projectedNetCashflow.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Alerts</CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    alert.type === "warning"
                      ? "bg-orange-50 border-orange-200"
                      : alert.type === "alert"
                        ? "bg-red-50 border-red-200"
                        : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />}
                    {alert.type === "alert" && <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />}
                    {alert.type === "info" && <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5" />}
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          alert.type === "warning"
                            ? "text-orange-800"
                            : alert.type === "alert"
                              ? "text-red-800"
                              : "text-blue-800"
                        }`}
                      >
                        {alert.title}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          alert.type === "warning"
                            ? "text-orange-700"
                            : alert.type === "alert"
                              ? "text-red-700"
                              : "text-blue-700"
                        }`}
                      >
                        {alert.message}
                      </p>
                      <Button
                        variant="link"
                        size="sm"
                        className={`p-0 h-auto text-xs mt-1 ${
                          alert.type === "warning"
                            ? "text-orange-600"
                            : alert.type === "alert"
                              ? "text-red-600"
                              : "text-blue-600"
                        }`}
                      >
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderForecastView = () => (
    <div className="space-y-8">
      {/* Add Manual Cash Flow Entry */}
      <Card>
        <CardHeader>
          <CardTitle>Add Cash Flow Item</CardTitle>
          <CardDescription>Manually add income or expense items to improve forecasting accuracy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  placeholder="e.g., Freelance work, Rent payment"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="one-time">One-time</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="salary">Salary</option>
                  <option value="freelance">Freelance</option>
                  <option value="investment">Investment Income</option>
                  <option value="rent">Rent</option>
                  <option value="utilities">Utilities</option>
                  <option value="food">Food & Dining</option>
                  <option value="transportation">Transportation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button style={{ backgroundColor: "#00355f" }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Cash Flow Item
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>6-Month Cash Flow Forecast</CardTitle>
          <CardDescription>Projected income and expenses based on historical data and manual entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Forecast chart will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Transactions</CardTitle>
          <CardDescription>Predicted income and expenses for the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.type === "income" ? "text-green-600" : "text-gray-900"}`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <Badge variant={transaction.confidence === "confirmed" ? "default" : "secondary"} className="text-xs">
                    {transaction.confidence}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderRecurringView = () => (
    <div className="space-y-8">
      {/* Add Recurring Item */}
      <Card>
        <CardHeader>
          <CardTitle>Add Recurring Item</CardTitle>
          <CardDescription>Set up recurring income or expense items for better cash flow planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <input
                  type="text"
                  placeholder="e.g., Monthly salary, Rent payment"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Next Due Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Level</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                  <option value="high">High - Very certain</option>
                  <option value="medium">Medium - Likely</option>
                  <option value="low">Low - Uncertain</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button style={{ backgroundColor: "#00355f" }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Recurring Item
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recurring Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Recurring Items</CardTitle>
          <CardDescription>Manage your recurring income and expense items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recurringItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === "income" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    {item.type === "income" ? (
                      <ArrowUpRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.description}</p>
                    <p className="text-sm text-gray-500">
                      {item.frequency} • Next: {item.nextDate}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {item.confidence} confidence
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className={`font-semibold ${item.type === "income" ? "text-green-600" : "text-gray-900"}`}>
                      {item.amount > 0 ? "+" : ""}${Math.abs(item.amount).toFixed(2)}
                    </p>
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
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cash Flow Analysis</h2>
        <p className="text-gray-600">Monitor your income, expenses, and cash flow patterns over time.</p>
      </div>

      {/* Period and View Selectors */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-900">Period:</span>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm font-sans"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={selectedView === "overview" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedView("overview")}
                style={{
                  backgroundColor: selectedView === "overview" ? "#00355f" : "transparent",
                }}
              >
                Overview
              </Button>
              <Button
                variant={selectedView === "forecast" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedView("forecast")}
                style={{
                  backgroundColor: selectedView === "forecast" ? "#00355f" : "transparent",
                }}
              >
                Forecast
              </Button>
              <Button
                variant={selectedView === "recurring" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedView("recurring")}
                style={{
                  backgroundColor: selectedView === "recurring" ? "#00355f" : "transparent",
                }}
              >
                Recurring
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cash Flow Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-2 text-green-600" />
              Total Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${cashflowSummary.totalIncome.toLocaleString()}</div>
            <div className="text-sm text-gray-500">This month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <ArrowDownRight className="w-4 h-4 mr-2 text-red-600" />
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${cashflowSummary.totalExpenses.toLocaleString()}</div>
            <div className="text-sm text-gray-500">This month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-blue-600" />
              Net Cash Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${cashflowSummary.netCashflow.toLocaleString()}</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% vs last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Page Content */}
      {renderCurrentView()}
    </div>
  )
}
