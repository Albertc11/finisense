"use client"

import { useState } from "react"
import { Download, FileText, Filter, Mail, Settings, BarChart3, PieChart, TrendingUp, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function ReportsPage() {
  const [selectedReports, setSelectedReports] = useState<string[]>([])
  const [reportPeriod, setReportPeriod] = useState("monthly")
  const [reportFormat, setReportFormat] = useState("pdf")

  const availableReports = [
    {
      id: "budget-summary",
      name: "Budget Summary",
      description: "Comprehensive overview of budget performance by category",
      icon: PieChart,
      category: "budgeting",
      lastGenerated: "2024-01-15",
      size: "2.3 MB",
    },
    {
      id: "transaction-history",
      name: "Transaction History",
      description: "Detailed list of all transactions with categories and tags",
      icon: FileText,
      category: "transactions",
      lastGenerated: "2024-01-14",
      size: "5.7 MB",
    },
    {
      id: "cashflow-analysis",
      name: "Cash Flow Analysis",
      description: "Income vs expenses trends and forecasting",
      icon: TrendingUp,
      category: "cashflow",
      lastGenerated: "2024-01-13",
      size: "1.8 MB",
    },
    {
      id: "goal-progress",
      name: "Goal Progress Report",
      description: "Status and progress tracking for all financial goals",
      icon: BarChart3,
      category: "goals",
      lastGenerated: "2024-01-12",
      size: "1.2 MB",
    },
    {
      id: "investment-performance",
      name: "Investment Performance",
      description: "Portfolio analysis with returns and asset allocation",
      icon: TrendingUp,
      category: "investments",
      lastGenerated: "2024-01-11",
      size: "3.1 MB",
    },
    {
      id: "net-worth-statement",
      name: "Net Worth Statement",
      description: "Complete overview of assets, liabilities, and net worth",
      icon: DollarSign,
      category: "overview",
      lastGenerated: "2024-01-10",
      size: "0.9 MB",
    },
    {
      id: "tax-summary",
      name: "Tax Summary",
      description: "Tax-relevant transactions and deductions summary",
      icon: FileText,
      category: "tax",
      lastGenerated: "2024-01-09",
      size: "2.1 MB",
    },
    {
      id: "spending-analysis",
      name: "Spending Analysis",
      description: "Detailed breakdown of spending patterns and trends",
      icon: PieChart,
      category: "analysis",
      lastGenerated: "2024-01-08",
      size: "4.2 MB",
    },
  ]

  const scheduledReports = [
    {
      id: "monthly-summary",
      name: "Monthly Financial Summary",
      frequency: "Monthly",
      nextRun: "2024-02-01",
      recipients: ["john@example.com"],
      format: "PDF",
      status: "active",
    },
    {
      id: "weekly-cashflow",
      name: "Weekly Cash Flow Report",
      frequency: "Weekly",
      nextRun: "2024-01-22",
      recipients: ["john@example.com", "spouse@example.com"],
      format: "CSV",
      status: "active",
    },
    {
      id: "quarterly-goals",
      name: "Quarterly Goals Review",
      frequency: "Quarterly",
      nextRun: "2024-04-01",
      recipients: ["john@example.com"],
      format: "PDF",
      status: "paused",
    },
  ]

  const recentReports = [
    {
      name: "January Budget Summary",
      type: "Budget Summary",
      generatedDate: "2024-01-15",
      format: "PDF",
      size: "2.3 MB",
      status: "completed",
    },
    {
      name: "Q4 2023 Investment Performance",
      type: "Investment Performance",
      generatedDate: "2024-01-01",
      format: "PDF",
      size: "3.8 MB",
      status: "completed",
    },
    {
      name: "December Transaction History",
      type: "Transaction History",
      generatedDate: "2023-12-31",
      format: "CSV",
      size: "6.2 MB",
      status: "completed",
    },
    {
      name: "2023 Tax Summary",
      type: "Tax Summary",
      generatedDate: "2023-12-30",
      format: "PDF",
      size: "2.7 MB",
      status: "completed",
    },
  ]

  const handleReportSelection = (reportId: string) => {
    setSelectedReports((prev) => (prev.includes(reportId) ? prev.filter((id) => id !== reportId) : [...prev, reportId]))
  }

  const handleSelectAll = () => {
    if (selectedReports.length === availableReports.length) {
      setSelectedReports([])
    } else {
      setSelectedReports(availableReports.map((report) => report.id))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Reports</h2>
        <p className="text-gray-600">Generate, schedule, and download comprehensive financial reports.</p>
      </div>

      {/* Report Generation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate Reports</CardTitle>
          <CardDescription>Select reports to generate and customize the output format</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Report Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Available Reports</h3>
                <Button variant="outline" size="sm" onClick={handleSelectAll}>
                  {selectedReports.length === availableReports.length ? "Deselect All" : "Select All"}
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableReports.map((report) => {
                  const Icon = report.icon
                  return (
                    <div
                      key={report.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedReports.includes(report.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleReportSelection(report.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={selectedReports.includes(report.id)}
                          onChange={() => handleReportSelection(report.id)}
                        />
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: "#00355f" }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{report.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {report.category}
                            </Badge>
                            <span className="text-xs text-gray-400">Last: {report.lastGenerated}</span>
                            <span className="text-xs text-gray-400">{report.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Report Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Period</label>
                <select
                  value={reportPeriod}
                  onChange={(e) => setReportPeriod(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                  <option value="quarterly">This Quarter</option>
                  <option value="yearly">This Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select
                  value={reportFormat}
                  onChange={(e) => setReportFormat(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="pdf">PDF</option>
                  <option value="csv">CSV</option>
                  <option value="xlsx">Excel (XLSX)</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button
                  className="w-full"
                  style={{ backgroundColor: "#00355f" }}
                  disabled={selectedReports.length === 0}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate Reports ({selectedReports.length})
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scheduled Reports */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Automatically generated reports sent to your email</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Manage
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#00355f" }}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">
                        {report.frequency} • Next: {report.nextRun}
                      </p>
                      <p className="text-xs text-gray-400">
                        {report.recipients.length} recipient{report.recipients.length !== 1 ? "s" : ""} •{" "}
                        {report.format}
                      </p>
                    </div>
                  </div>
                  <Badge variant={report.status === "active" ? "default" : "secondary"}>{report.status}</Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Schedule New Report
            </Button>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Previously generated reports available for download</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#00355f" }}
                    >
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.type}</p>
                      <p className="text-xs text-gray-400">
                        {report.generatedDate} • {report.format} • {report.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {report.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>Pre-configured report combinations for common use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00355f" }}
                >
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-gray-900">Monthly Review</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Complete monthly financial overview including budget, cash flow, and goal progress.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Generate Monthly Review
              </Button>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00355f" }}
                >
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-gray-900">Tax Preparation</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                All tax-relevant reports including transaction history, investment gains, and deductions.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Generate Tax Package
              </Button>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#00355f" }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-gray-900">Investment Review</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Comprehensive investment analysis including performance, allocation, and recommendations.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Generate Investment Review
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
