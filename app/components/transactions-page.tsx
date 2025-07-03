"use client"

import { useState } from "react"
import {
  Upload,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Tag,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function TransactionsPage() {
  const [selectedTransactions, setSelectedTransactions] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const transactions = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Starbucks Coffee",
      amount: -5.85,
      category: "Food & Dining",
      account: "Chase Checking",
      status: "cleared",
      tags: ["coffee", "morning"],
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Salary Deposit",
      amount: 4200.0,
      category: "Income",
      account: "Chase Checking",
      status: "cleared",
      tags: ["salary", "work"],
    },
    {
      id: 3,
      date: "2024-01-13",
      description: "Netflix Subscription",
      amount: -15.99,
      category: "Entertainment",
      account: "Credit Card",
      status: "pending",
      tags: ["subscription", "streaming"],
    },
    {
      id: 4,
      date: "2024-01-13",
      description: "Grocery Store",
      amount: -127.43,
      category: "Food & Dining",
      account: "Chase Checking",
      status: "cleared",
      tags: ["groceries", "food"],
    },
    {
      id: 5,
      date: "2024-01-12",
      description: "Gas Station",
      amount: -45.2,
      category: "Transportation",
      account: "Chase Checking",
      status: "cleared",
      tags: ["gas", "car"],
    },
    {
      id: 6,
      date: "2024-01-12",
      description: "Amazon Purchase",
      amount: -89.99,
      category: "Shopping",
      account: "Credit Card",
      status: "cleared",
      tags: ["online", "shopping"],
    },
    {
      id: 7,
      date: "2024-01-11",
      description: "Electric Bill",
      amount: -125.67,
      category: "Utilities",
      account: "Chase Checking",
      status: "cleared",
      tags: ["utilities", "electric"],
    },
    {
      id: 8,
      date: "2024-01-10",
      description: "Freelance Payment",
      amount: 850.0,
      category: "Income",
      account: "Chase Checking",
      status: "cleared",
      tags: ["freelance", "work"],
    },
  ]

  const categories = [
    "all",
    "Income",
    "Food & Dining",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Utilities",
    "Healthcare",
    "Education",
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || transaction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSelectTransaction = (id: number) => {
    setSelectedTransactions((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedTransactions.length === filteredTransactions.length) {
      setSelectedTransactions([])
    } else {
      setSelectedTransactions(filteredTransactions.map((t) => t.id))
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Transactions</h2>
        <p className="text-gray-600">Upload, categorize, and manage all your financial transactions.</p>
      </div>

      {/* Upload Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload Bank Statements</CardTitle>
          <CardDescription>
            Upload PDF, CSV, or XLSX files from your bank or credit card statements for automatic parsing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">Drop your files here or click to browse</p>
            <p className="text-sm text-gray-500 mb-4">Supports PDF, CSV, and XLSX files up to 10MB each</p>
            <Button style={{ backgroundColor: "#00355f" }}>
              <Upload className="w-4 h-4 mr-2" />
              Choose Files
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline">✓ Bank of America</Badge>
            <Badge variant="outline">✓ Chase</Badge>
            <Badge variant="outline">✓ Wells Fargo</Badge>
            <Badge variant="outline">✓ Citibank</Badge>
            <Badge variant="outline">+ 50 more banks supported</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedTransactions.length > 0 && (
        <Card className="mb-4">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {selectedTransactions.length} transaction{selectedTransactions.length !== 1 ? "s" : ""} selected
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Tag className="w-4 h-4 mr-2" />
                  Add Tags
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Bulk Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>
                {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? "s" : ""} found
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm" style={{ backgroundColor: "#00355f" }}>
                <Plus className="w-4 h-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* Header */}
            <div className="flex items-center py-3 px-4 bg-gray-50 rounded-lg font-medium text-sm text-gray-600">
              <div className="w-8">
                <Checkbox
                  checked={selectedTransactions.length === filteredTransactions.length}
                  onCheckedChange={handleSelectAll}
                />
              </div>
              <div className="flex-1 grid grid-cols-6 gap-4">
                <div>Date</div>
                <div className="col-span-2">Description</div>
                <div>Category</div>
                <div>Account</div>
                <div className="text-right">Amount</div>
              </div>
              <div className="w-20"></div>
            </div>

            {/* Transaction Rows */}
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className={`flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 ${
                  selectedTransactions.includes(transaction.id) ? "bg-blue-50" : ""
                }`}
              >
                <div className="w-8">
                  <Checkbox
                    checked={selectedTransactions.includes(transaction.id)}
                    onCheckedChange={() => handleSelectTransaction(transaction.id)}
                  />
                </div>
                <div className="flex-1 grid grid-cols-6 gap-4 items-center">
                  <div className="text-sm text-gray-600">{transaction.date}</div>
                  <div className="col-span-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <div className="flex gap-1 mt-1">
                          {transaction.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline">{transaction.category}</Badge>
                  </div>
                  <div className="text-sm text-gray-600">{transaction.account}</div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
                      {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <Badge
                      variant={transaction.status === "cleared" ? "default" : "secondary"}
                      className="text-xs mt-1"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
                <div className="w-20 flex justify-end">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No transactions found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
