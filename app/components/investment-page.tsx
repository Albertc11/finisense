"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, Plus, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function InvestmentPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M")

  const portfolioData = {
    totalValue: 89750,
    totalGain: -720,
    totalGainPercent: -0.8,
    dayChange: 450,
    dayChangePercent: 0.5,
  }

  const holdings = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      shares: 50,
      currentPrice: 175.43,
      totalValue: 8771.5,
      gain: 271.5,
      gainPercent: 3.2,
      allocation: 9.8,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      shares: 25,
      currentPrice: 248.87,
      totalValue: 6221.75,
      gain: -378.25,
      gainPercent: -5.7,
      allocation: 6.9,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      shares: 40,
      currentPrice: 378.85,
      totalValue: 15154,
      gain: 654,
      gainPercent: 4.5,
      allocation: 16.9,
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      shares: 15,
      currentPrice: 875.28,
      totalValue: 13129.2,
      gain: 1129.2,
      gainPercent: 9.4,
      allocation: 14.6,
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      shares: 0.5,
      currentPrice: 67500,
      totalValue: 33750,
      gain: 8750,
      gainPercent: 35.0,
      allocation: 37.6,
    },
  ]

  const assetAllocation = [
    { category: "Stocks", value: 43276.25, percentage: 48.2, color: "#00355f" },
    { category: "Cryptocurrency", value: 33750, percentage: 37.6, color: "#3b82f6" },
    { category: "ETFs", value: 8500, percentage: 9.5, color: "#10b981" },
    { category: "Bonds", value: 4223.75, percentage: 4.7, color: "#f59e0b" },
  ]

  const timeframes = ["1D", "1W", "1M", "3M", "6M", "1Y", "ALL"]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Investment Portfolio</h2>
        <p className="text-gray-600">Track and manage your investment holdings across multiple asset classes.</p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">${portfolioData.totalValue.toLocaleString()}</div>
            <div
              className={`flex items-center text-sm ${portfolioData.totalGain >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {portfolioData.totalGain >= 0 ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              ${Math.abs(portfolioData.totalGain).toLocaleString()} ({portfolioData.totalGainPercent}%)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Today's Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${portfolioData.dayChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {portfolioData.dayChange >= 0 ? "+" : ""}${portfolioData.dayChange.toLocaleString()}
            </div>
            <div
              className={`flex items-center text-sm ${portfolioData.dayChange >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {portfolioData.dayChange >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {portfolioData.dayChangePercent}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Best Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">BTC</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +35.0%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Worst Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">TSLA</div>
            <div className="flex items-center text-sm text-red-600">
              <TrendingDown className="w-4 h-4 mr-1" />
              -5.7%
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Holdings */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Holdings</CardTitle>
                  <CardDescription>Your current investment positions</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" style={{ backgroundColor: "#00355f" }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Asset
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: "#00355f" }}
                      >
                        {holding.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{holding.symbol}</p>
                        <p className="text-sm text-gray-500">{holding.name}</p>
                        <p className="text-xs text-gray-400">
                          {holding.shares} shares @ ${holding.currentPrice}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${holding.totalValue.toLocaleString()}</p>
                      <p className={`text-sm ${holding.gain >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {holding.gain >= 0 ? "+" : ""}${holding.gain.toFixed(2)} ({holding.gainPercent}%)
                      </p>
                      <p className="text-xs text-gray-500">{holding.allocation}% of portfolio</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add Asset Form */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Add New Asset</CardTitle>
              <CardDescription>
                Manually add stocks, real estate, or other investments to your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asset Type</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                      <option value="stock">Stock</option>
                      <option value="etf">ETF</option>
                      <option value="crypto">Cryptocurrency</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="bond">Bond</option>
                      <option value="commodity">Commodity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asset Name/Symbol</label>
                    <input
                      type="text"
                      placeholder="e.g., AAPL, Bitcoin, 123 Main St Property"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity/Shares</label>
                    <input
                      type="number"
                      placeholder="0"
                      step="0.01"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Value per Unit</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Price per Unit</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <Button variant="outline">Cancel</Button>
                <Button style={{ backgroundColor: "#00355f" }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Asset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart Placeholder */}
          <Card className="mt-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>Historical performance over time</CardDescription>
                </div>
                <div className="flex space-x-1">
                  {timeframes.map((timeframe) => (
                    <Button
                      key={timeframe}
                      variant={selectedTimeframe === timeframe ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTimeframe(timeframe)}
                      style={{
                        backgroundColor: selectedTimeframe === timeframe ? "#00355f" : "transparent",
                      }}
                    >
                      {timeframe}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Portfolio performance chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Asset Allocation */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Portfolio diversification breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assetAllocation.map((asset, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{asset.category}</span>
                      <span className="text-gray-500">{asset.percentage}%</span>
                    </div>
                    <Progress value={asset.percentage} className="h-2" />
                    <div className="text-xs text-gray-500">${asset.value.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Investment Insights */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>AI Investment Insights</CardTitle>
              <CardDescription>Personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 Your portfolio is heavily weighted in tech stocks. Consider diversifying into other sectors.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Bitcoin allocation is quite high at 37.6%. Consider rebalancing for better risk management.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800">
                    🎯 Great job on your NVIDIA position! It's up 9.4% and performing well.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Stock/ETF
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Real Estate
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Cryptocurrency
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Detailed Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
