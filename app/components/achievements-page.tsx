"use client"

import { useState } from "react"
import { Award, Star, Trophy, Target, Zap, Lock, Share2, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AchievementsPage() {
  const [selectedTab, setSelectedTab] = useState("badges")

  const userStats = {
    level: 5,
    xp: 1200,
    xpToNext: 1500,
    totalBadges: 12,
    totalXP: 3450,
    streakDays: 45,
    completedChallenges: 8,
  }

  const earnedBadges = [
    {
      id: 1,
      name: "Budget Master",
      description: "Stayed under budget for 3 consecutive months",
      icon: "🏆",
      rarity: "gold",
      xpReward: 500,
      category: "budgeting",
      earnedDate: "2024-01-10",
      progress: 100,
    },
    {
      id: 2,
      name: "Savings Streak",
      description: "Saved money for 30 days straight",
      icon: "🔥",
      rarity: "silver",
      xpReward: 300,
      category: "savings",
      earnedDate: "2024-01-05",
      progress: 100,
    },
    {
      id: 3,
      name: "Goal Crusher",
      description: "Completed your first financial goal",
      icon: "🎯",
      rarity: "gold",
      xpReward: 750,
      category: "goals",
      earnedDate: "2023-12-20",
      progress: 100,
    },
    {
      id: 4,
      name: "Transaction Tracker",
      description: "Categorized 100 transactions",
      icon: "📊",
      rarity: "bronze",
      xpReward: 150,
      category: "transactions",
      earnedDate: "2023-12-15",
      progress: 100,
    },
    {
      id: 5,
      name: "First Steps",
      description: "Created your first budget",
      icon: "👶",
      rarity: "bronze",
      xpReward: 100,
      category: "budgeting",
      earnedDate: "2023-11-01",
      progress: 100,
    },
    {
      id: 6,
      name: "Grocery Guru",
      description: "Stayed within grocery budget for 2 months",
      icon: "🛒",
      rarity: "silver",
      xpReward: 250,
      category: "budgeting",
      earnedDate: "2024-01-01",
      progress: 100,
    },
  ]

  const availableBadges = [
    {
      id: 7,
      name: "Investment Initiate",
      description: "Make your first investment",
      icon: "📈",
      rarity: "bronze",
      xpReward: 200,
      category: "milestones",
      progress: 0,
      requirement: "Add your first investment asset",
    },
    {
      id: 8,
      name: "Debt Destroyer",
      description: "Pay off a debt completely",
      icon: "💪",
      rarity: "gold",
      xpReward: 600,
      category: "goals",
      progress: 65,
      requirement: "Complete debt payoff goal",
    },
    {
      id: 9,
      name: "Savings Champion",
      description: "Save $10,000 in total",
      icon: "💰",
      rarity: "gold",
      xpReward: 800,
      category: "savings",
      progress: 75,
      requirement: "Reach $10,000 in total savings",
    },
    {
      id: 10,
      name: "Challenge Conqueror",
      description: "Complete 10 challenges",
      icon: "🏅",
      rarity: "silver",
      xpReward: 400,
      category: "challenges",
      progress: 80,
      requirement: "Complete 2 more challenges",
    },
    {
      id: 11,
      name: "Coffee Cutter",
      description: "Reduce coffee spending by 50%",
      icon: "☕",
      rarity: "bronze",
      xpReward: 150,
      category: "budgeting",
      progress: 30,
      requirement: "Reduce coffee spending by 20% more",
    },
    {
      id: 12,
      name: "Century Streak",
      description: "Maintain any streak for 100 days",
      icon: "💯",
      rarity: "platinum",
      xpReward: 1000,
      category: "streaks",
      progress: 45,
      requirement: "Continue streak for 55 more days",
    },
  ]

  const secretBadges = [
    {
      id: 13,
      name: "Night Owl",
      description: "Log a transaction at 3 AM",
      icon: "🦉",
      rarity: "secret",
      xpReward: 50,
      category: "secret",
      progress: 0,
      hint: "Some people manage money at unusual hours...",
    },
    {
      id: 14,
      name: "Penny Pincher",
      description: "Save exactly $0.01 in a month",
      icon: "🪙",
      rarity: "secret",
      xpReward: 100,
      category: "secret",
      progress: 0,
      hint: "Sometimes the smallest amounts matter most",
    },
    {
      id: 15,
      name: "Time Traveler",
      description: "Set a goal with a deadline in the past",
      icon: "⏰",
      rarity: "secret",
      xpReward: 75,
      category: "secret",
      progress: 0,
      hint: "Not all goals follow the rules of time...",
    },
  ]

  // Challenges Data
  const activeChallenges = [
    {
      id: 1,
      title: "No Takeout Week",
      description: "Spend less than $50 on takeout this week",
      type: "weekly",
      progress: 65,
      target: 50,
      current: 32.5,
      timeLeft: "3 days",
      reward: {
        xp: 50,
        badge: "Dining Discipline",
      },
      difficulty: "easy",
      category: "spending",
    },
    {
      id: 2,
      title: "Coffee Cutter",
      description: "Reduce coffee spending by 10% this month",
      type: "monthly",
      progress: 30,
      target: 10,
      current: 3,
      timeLeft: "18 days",
      reward: {
        xp: 75,
        badge: "Caffeine Controller",
      },
      difficulty: "medium",
      category: "budgeting",
    },
    {
      id: 3,
      title: "Transaction Tracker",
      description: "Categorize 25 transactions this week",
      type: "weekly",
      progress: 80,
      target: 25,
      current: 20,
      timeLeft: "2 days",
      reward: {
        xp: 40,
        badge: null,
      },
      difficulty: "easy",
      category: "organization",
    },
    {
      id: 4,
      title: "Savings Sprint",
      description: "Save $500 this month",
      type: "monthly",
      progress: 45,
      target: 500,
      current: 225,
      timeLeft: "15 days",
      reward: {
        xp: 100,
        badge: "Sprint Saver",
      },
      difficulty: "hard",
      category: "savings",
    },
  ]

  const availableChallenges = [
    {
      id: 5,
      title: "Grocery Guru",
      description: "Stay within grocery budget for 2 weeks",
      type: "custom",
      duration: "14 days",
      reward: {
        xp: 60,
        badge: "Grocery Guru",
      },
      difficulty: "medium",
      category: "budgeting",
      requirements: ["Set grocery budget", "Track grocery expenses"],
    },
    {
      id: 6,
      title: "Investment Initiate",
      description: "Make your first investment of any amount",
      type: "milestone",
      duration: "No time limit",
      reward: {
        xp: 150,
        badge: "Investment Initiate",
      },
      difficulty: "medium",
      category: "investing",
      requirements: ["Add investment account", "Make first investment"],
    },
    {
      id: 7,
      title: "Budget Builder",
      description: "Create budgets for 5 different categories",
      type: "milestone",
      duration: "No time limit",
      reward: {
        xp: 80,
        badge: "Budget Builder",
      },
      difficulty: "easy",
      category: "budgeting",
      requirements: ["Create 5 budget categories"],
    },
    {
      id: 8,
      title: "Debt Destroyer",
      description: "Pay off any debt completely",
      type: "milestone",
      duration: "No time limit",
      reward: {
        xp: 200,
        badge: "Debt Destroyer",
      },
      difficulty: "hard",
      category: "debt",
      requirements: ["Set debt payoff goal", "Complete debt payment"],
    },
  ]

  const completedChallenges = [
    {
      id: 9,
      title: "First Budget",
      description: "Create your first budget category",
      completedDate: "2024-01-10",
      reward: {
        xp: 25,
        badge: "Budget Beginner",
      },
      difficulty: "easy",
      category: "budgeting",
    },
    {
      id: 10,
      title: "Goal Getter",
      description: "Set your first financial goal",
      completedDate: "2024-01-05",
      reward: {
        xp: 30,
        badge: "Goal Getter",
      },
      difficulty: "easy",
      category: "goals",
    },
    {
      id: 11,
      title: "Statement Uploader",
      description: "Upload your first bank statement",
      completedDate: "2023-12-28",
      reward: {
        xp: 20,
        badge: "Statement Uploader",
      },
      difficulty: "easy",
      category: "organization",
    },
  ]

  const personalizedQuests = [
    {
      id: 12,
      title: "Reduce Entertainment Spending",
      description: "Based on your spending patterns, try reducing entertainment expenses by 15%",
      aiGenerated: true,
      type: "personalized",
      duration: "30 days",
      reward: {
        xp: 90,
        badge: "Entertainment Optimizer",
      },
      difficulty: "medium",
      category: "ai-suggested",
      reason: "You've spent 25% more on entertainment this month compared to your average",
    },
    {
      id: 13,
      title: "Increase Emergency Fund",
      description: "Add $200 to your emergency fund this month",
      aiGenerated: true,
      type: "personalized",
      duration: "30 days",
      reward: {
        xp: 120,
        badge: "Emergency Enhancer",
      },
      difficulty: "medium",
      category: "ai-suggested",
      reason: "Your emergency fund is below the recommended 3-month expense coverage",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "platinum":
        return "bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800 border-gray-400"
      case "gold":
        return "bg-gradient-to-r from-yellow-300 to-yellow-100 text-yellow-800 border-yellow-400"
      case "silver":
        return "bg-gradient-to-r from-gray-200 to-gray-50 text-gray-700 border-gray-300"
      case "bronze":
        return "bg-gradient-to-r from-orange-200 to-orange-100 text-orange-800 border-orange-300"
      case "secret":
        return "bg-gradient-to-r from-purple-300 to-purple-100 text-purple-800 border-purple-400"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "hard":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "spending":
        return "💳"
      case "budgeting":
        return "📊"
      case "savings":
        return "💰"
      case "investing":
        return "📈"
      case "organization":
        return "📋"
      case "debt":
        return "💪"
      case "goals":
        return "🎯"
      case "ai-suggested":
        return "🤖"
      default:
        return "⭐"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Achievements & Challenges</h2>
        <p className="text-gray-600">
          Track your progress, unlock badges, and complete challenges to improve your financial habits.
        </p>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold" style={{ color: "#00355f" }}>
                  Level {userStats.level}
                </p>
                <p className="text-sm text-gray-600">
                  {userStats.xp}/{userStats.xpToNext} XP
                </p>
                <Progress value={(userStats.xp / userStats.xpToNext) * 100} className="h-2 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold text-purple-600">{userStats.totalBadges}</p>
                <p className="text-sm text-gray-600">Badges Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-yellow-600">{activeChallenges.length}</p>
                <p className="text-sm text-gray-600">Active Challenges</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-600">{userStats.totalXP.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total XP</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex space-x-1">
            {[
              { id: "badges", label: "Badges", count: earnedBadges.length + availableBadges.length },
              { id: "active", label: "Active Challenges", count: activeChallenges.length },
              { id: "available", label: "Available Challenges", count: availableChallenges.length },
              { id: "personalized", label: "AI Suggested", count: personalizedQuests.length },
              { id: "completed", label: "Completed", count: completedChallenges.length },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTab(tab.id)}
                style={{
                  backgroundColor: selectedTab === tab.id ? "#00355f" : "transparent",
                }}
                className="flex items-center space-x-2"
              >
                <span>{tab.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {tab.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Badges Tab */}
      {selectedTab === "badges" && (
        <div className="space-y-8">
          {/* Earned Badges */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>Earned Badges ({earnedBadges.length})</span>
                  </CardTitle>
                  <CardDescription>Congratulations on these achievements!</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Achievements
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {earnedBadges.map((badge) => (
                  <div key={badge.id} className={`p-4 rounded-lg border-2 ${getRarityColor(badge.rarity)}`}>
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-sm">{badge.name}</h3>
                          <Badge variant="outline" className="text-xs capitalize">
                            {badge.rarity}
                          </Badge>
                        </div>
                        <p className="text-xs mb-2">{badge.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{badge.earnedDate}</span>
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            +{badge.xpReward} XP
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Available Badges ({availableBadges.length})</span>
              </CardTitle>
              <CardDescription>Work towards these achievements to earn more XP and badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableBadges.map((badge) => (
                  <div key={badge.id} className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl opacity-60">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-sm text-gray-700">{badge.name}</h3>
                          <Badge variant="outline" className="text-xs capitalize">
                            {badge.rarity}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-medium">{badge.progress}%</span>
                          </div>
                          <Progress value={badge.progress} className="h-2" />
                          <p className="text-xs text-gray-500">{badge.requirement}</p>
                          <Badge variant="secondary" className="text-xs">
                            +{badge.xpReward} XP
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Secret Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-purple-500" />
                <span>Secret Badges ({secretBadges.length})</span>
              </CardTitle>
              <CardDescription>Mysterious achievements waiting to be discovered...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {secretBadges.map((badge) => (
                  <div key={badge.id} className="p-4 rounded-lg border-2 border-purple-200 bg-purple-50">
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl opacity-40">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-sm text-purple-700">???</h3>
                          <Badge variant="outline" className="text-xs bg-purple-100 text-purple-700">
                            secret
                          </Badge>
                        </div>
                        <p className="text-xs text-purple-600 mb-2 italic">{badge.hint}</p>
                        <Badge variant="secondary" className="text-xs">
                          +{badge.xpReward} XP
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Active Challenges */}
      {selectedTab === "active" && (
        <div className="space-y-6">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                    <div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    <Badge variant="outline" className="capitalize">
                      {challenge.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-gray-600">{challenge.progress}% complete</span>
                  </div>
                  <Progress value={challenge.progress} className="h-3" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{challenge.timeLeft} remaining</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span>
                        {challenge.category === "spending"
                          ? `$${challenge.current}/$${challenge.target}`
                          : challenge.category === "savings"
                            ? `$${challenge.current}/$${challenge.target}`
                            : `${challenge.current}/${challenge.target}`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span>
                        +{challenge.reward.xp} XP
                        {challenge.reward.badge && ` + ${challenge.reward.badge} Badge`}
                      </span>
                    </div>
                  </div>

                  {challenge.progress >= 90 && (
                    <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-800 font-medium">
                          Almost there! You're so close to completing this challenge.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Available Challenges */}
      {selectedTab === "available" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                  <div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                  <Badge variant="outline" className="capitalize">
                    {challenge.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Duration: {challenge.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span>
                        Reward: +{challenge.reward.xp} XP
                        {challenge.reward.badge && ` + ${challenge.reward.badge} Badge`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {challenge.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" style={{ backgroundColor: "#00355f" }}>
                    Start Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Personalized Quests */}
      {selectedTab === "personalized" && (
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">🤖</span>
              <h3 className="font-medium text-blue-800">AI-Generated Challenges</h3>
            </div>
            <p className="text-sm text-blue-700">
              These personalized challenges are created based on your spending patterns and financial goals.
            </p>
          </div>

          {personalizedQuests.map((quest) => (
            <Card key={quest.id} className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getCategoryIcon(quest.category)}</span>
                    <div>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <span>{quest.title}</span>
                        <Badge variant="outline" className="text-xs bg-purple-100 text-purple-700">
                          AI Suggested
                        </Badge>
                      </CardTitle>
                      <CardDescription>{quest.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(quest.difficulty)}>{quest.difficulty}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-purple-800">Why this challenge?</p>
                        <p className="text-sm text-purple-700">{quest.reason}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Duration: {quest.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span>
                        Reward: +{quest.reward.xp} XP + {quest.reward.badge} Badge
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1" style={{ backgroundColor: "#00355f" }}>
                      Accept Challenge
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Maybe Later
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Completed Challenges */}
      {selectedTab === "completed" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedChallenges.map((challenge) => (
            <Card key={challenge.id} className="opacity-75">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                  <div>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{challenge.title}</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </div>
                </div>
                <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Completed on {challenge.completedDate}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Zap className="w-4 h-4 text-gray-400" />
                    <span>
                      Earned: +{challenge.reward.xp} XP
                      {challenge.reward.badge && ` + ${challenge.reward.badge} Badge`}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-sm text-green-800 font-medium">✅ Challenge Completed!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
