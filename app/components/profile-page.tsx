"use client"

import { useState } from "react"
import {
  User,
  Mail,
  Lock,
  Trash2,
  UserPlus,
  Bell,
  Shield,
  Download,
  Upload,
  Eye,
  EyeOff,
  Edit,
  Save,
  X,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState("profile")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "November 2023",
    level: 5,
    xp: 1200,
    xpToNext: 1500,
    title: "Budget Master",
    totalBadges: 12,
    completedChallenges: 8,
    streakDays: 45,
  }

  const accountUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Owner",
      joinDate: "2023-11-01",
      status: "active",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Member",
      joinDate: "2023-12-15",
      status: "active",
      avatar: "JA",
    },
  ]

  const notificationSettings = {
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    goalReminders: true,
    budgetAlerts: true,
    challengeUpdates: false,
    marketingEmails: false,
  }

  const securitySettings = {
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30 minutes",
    dataEncryption: true,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile & Settings</h2>
        <p className="text-gray-600">Manage your account, preferences, and security settings.</p>
      </div>

      {/* Tab Navigation */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: "profile", label: "Profile", icon: User },
              { id: "account", label: "Account Users", icon: UserPlus },
              { id: "security", label: "Security", icon: Shield },
              { id: "notifications", label: "Notifications", icon: Bell },
              { id: "data", label: "Data & Privacy", icon: Download },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={selectedTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTab(tab.id)}
                  style={{
                    backgroundColor: selectedTab === tab.id ? "#00355f" : "transparent",
                  }}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Profile Tab */}
      {selectedTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information and preferences</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsEditingProfile(!isEditingProfile)}>
                    {isEditingProfile ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                    {isEditingProfile ? "Cancel" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    {isEditingProfile && (
                      <div>
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Change Photo
                        </Button>
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      {isEditingProfile ? (
                        <input
                          type="text"
                          defaultValue={userProfile.name}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                        />
                      ) : (
                        <p className="text-gray-900">{userProfile.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      {isEditingProfile ? (
                        <input
                          type="email"
                          defaultValue={userProfile.email}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                        />
                      ) : (
                        <p className="text-gray-900">{userProfile.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                      {isEditingProfile ? (
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                          <option>UTC-8 (Pacific Time)</option>
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC+0 (GMT)</option>
                          <option>UTC+8 (Hong Kong Time)</option>
                        </select>
                      ) : (
                        <p className="text-gray-900">UTC-8 (Pacific Time)</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                      {isEditingProfile ? (
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                          <option>USD - US Dollar</option>
                          <option>HKD - Hong Kong Dollar</option>
                          <option>TWD - Taiwan Dollar</option>
                          <option>AUD - Australian Dollar</option>
                          <option>JPY - Japanese Yen</option>
                          <option>KRW - Korean Won</option>
                        </select>
                      ) : (
                        <p className="text-gray-900">USD - US Dollar</p>
                      )}
                    </div>
                  </div>

                  {isEditingProfile && (
                    <div className="flex space-x-3">
                      <Button style={{ backgroundColor: "#00355f" }}>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm font-sans"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm font-sans"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm font-sans"
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special
                      characters.
                    </p>
                  </div>
                  <Button style={{ backgroundColor: "#00355f" }}>
                    <Lock className="w-4 h-4 mr-2" />
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Stats */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Stats</CardTitle>
                <CardDescription>Your SmartWealth journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: "#00355f" }}>
                      Level {userProfile.level}
                    </div>
                    <p className="text-sm text-gray-600">{userProfile.title}</p>
                    <div className="mt-2">
                      <Progress value={(userProfile.xp / userProfile.xpToNext) * 100} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {userProfile.xp}/{userProfile.xpToNext} XP
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{userProfile.totalBadges}</p>
                      <p className="text-xs text-gray-600">Badges Earned</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{userProfile.completedChallenges}</p>
                      <p className="text-xs text-gray-600">Challenges</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{userProfile.streakDays}</p>
                    <p className="text-xs text-gray-600">Day Streak</p>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">Member since {userProfile.joinDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Account Users Tab */}
      {selectedTab === "account" && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Account Users</CardTitle>
                  <CardDescription>Manage users who have access to this financial account</CardDescription>
                </div>
                <Button style={{ backgroundColor: "#00355f" }}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accountUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-xs text-gray-400">Joined {user.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={user.role === "Owner" ? "default" : "secondary"}>{user.role}</Badge>
                      <Badge variant={user.status === "active" ? "default" : "secondary"} className="capitalize">
                        {user.status}
                      </Badge>
                      {user.role !== "Owner" && (
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Invite New User */}
          <Card>
            <CardHeader>
              <CardTitle>Invite New User</CardTitle>
              <CardDescription>Add a family member or partner to your joint account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="user@example.com"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                      <option value="member">Member - View and add transactions</option>
                      <option value="admin">Admin - Full access except deletion</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personal Message (Optional)</label>
                  <textarea
                    placeholder="Add a personal message to the invitation..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-sans"
                  />
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Important</p>
                      <p className="text-sm text-yellow-700">
                        Invited users will have access to view your financial data. Only invite trusted family members
                        or partners.
                      </p>
                    </div>
                  </div>
                </div>
                <Button style={{ backgroundColor: "#00355f" }}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Security Tab */}
      {selectedTab === "security" && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={securitySettings.twoFactorAuth ? "default" : "secondary"}>
                      {securitySettings.twoFactorAuth ? "Enabled" : "Disabled"}
                    </Badge>
                    <Button variant="outline" size="sm">
                      {securitySettings.twoFactorAuth ? "Disable" : "Enable"}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Login Alerts</p>
                    <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={securitySettings.loginAlerts ? "default" : "secondary"}>
                      {securitySettings.loginAlerts ? "Enabled" : "Disabled"}
                    </Badge>
                    <Button variant="outline" size="sm">
                      {securitySettings.loginAlerts ? "Disable" : "Enable"}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Session Timeout</p>
                    <p className="text-sm text-gray-500">Automatically log out after period of inactivity</p>
                  </div>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm font-sans">
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Data Encryption</p>
                    <p className="text-sm text-gray-500">All your data is encrypted with bank-level security</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>Manage your active login sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Current Session</p>
                    <p className="text-sm text-gray-500">Chrome on macOS • San Francisco, CA</p>
                    <p className="text-xs text-gray-400">Last active: Now</p>
                  </div>
                  <Badge variant="default">Current</Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Mobile App</p>
                    <p className="text-sm text-gray-500">iPhone • San Francisco, CA</p>
                    <p className="text-xs text-gray-400">Last active: 2 hours ago</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                    Revoke
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Notifications Tab */}
      {selectedTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to be notified about your financial activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive important updates via email</p>
                </div>
                <Button
                  variant={notificationSettings.emailNotifications ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.emailNotifications ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.emailNotifications ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Get instant notifications on your device</p>
                </div>
                <Button
                  variant={notificationSettings.pushNotifications ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.pushNotifications ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.pushNotifications ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Weekly Reports</p>
                  <p className="text-sm text-gray-500">Receive weekly financial summary reports</p>
                </div>
                <Button
                  variant={notificationSettings.weeklyReports ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.weeklyReports ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.weeklyReports ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Goal Reminders</p>
                  <p className="text-sm text-gray-500">Get reminded about your financial goals</p>
                </div>
                <Button
                  variant={notificationSettings.goalReminders ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.goalReminders ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.goalReminders ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Budget Alerts</p>
                  <p className="text-sm text-gray-500">Get notified when approaching budget limits</p>
                </div>
                <Button
                  variant={notificationSettings.budgetAlerts ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.budgetAlerts ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.budgetAlerts ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Challenge Updates</p>
                  <p className="text-sm text-gray-500">Get updates on your active challenges</p>
                </div>
                <Button
                  variant={notificationSettings.challengeUpdates ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.challengeUpdates ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.challengeUpdates ? "Enabled" : "Disabled"}
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Marketing Emails</p>
                  <p className="text-sm text-gray-500">Receive tips, news, and product updates</p>
                </div>
                <Button
                  variant={notificationSettings.marketingEmails ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: notificationSettings.marketingEmails ? "#00355f" : "transparent",
                  }}
                >
                  {notificationSettings.marketingEmails ? "Enabled" : "Disabled"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data & Privacy Tab */}
      {selectedTab === "data" && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data Export</CardTitle>
              <CardDescription>Download your financial data in various formats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Export Transactions</span>
                    <span className="text-xs text-gray-500">CSV, PDF</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Export Reports</span>
                    <span className="text-xs text-gray-500">PDF, Excel</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                  >
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Full Data Export</span>
                    <span className="text-xs text-gray-500">JSON, ZIP</span>
                  </Button>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    Data exports may take a few minutes to generate. You'll receive an email when ready for download.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control how your data is used and shared</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Analytics & Insights</p>
                    <p className="text-sm text-gray-500">Allow us to analyze your data to provide better insights</p>
                  </div>
                  <Button variant="default" size="sm" style={{ backgroundColor: "#00355f" }}>
                    Enabled
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Personalized Recommendations</p>
                    <p className="text-sm text-gray-500">Receive AI-powered financial recommendations</p>
                  </div>
                  <Button variant="default" size="sm" style={{ backgroundColor: "#00355f" }}>
                    Enabled
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Third-party Integrations</p>
                    <p className="text-sm text-gray-500">Allow connections to external financial services</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Disabled
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions that will permanently affect your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800">Delete All Data</h4>
                      <p className="text-sm text-red-700 mt-1">
                        Permanently delete all your financial data, transactions, goals, and account information while
                        keeping your account active. This action cannot be undone.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete All Data
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800">Delete Account</h4>
                      <p className="text-sm text-red-700 mt-1">
                        Permanently delete your SmartWealth Global account. All data will be deleted, your subscription
                        will be cancelled, and you will lose access to all features. This action cannot be undone.
                      </p>
                      <div className="mt-3 space-y-2">
                        <p className="text-xs text-red-600 font-medium">This will:</p>
                        <ul className="text-xs text-red-600 list-disc list-inside space-y-1">
                          <li>Delete all your financial data and transactions</li>
                          <li>Cancel your subscription and stop all billing</li>
                          <li>Remove access for all account users</li>
                          <li>Delete your profile and achievements</li>
                        </ul>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
