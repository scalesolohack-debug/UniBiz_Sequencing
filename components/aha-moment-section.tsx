"use client"

import {
  Video,
  Instagram,
  CreditCard,
  Calendar,
  Plus,
  MessageCircle,
  Globe,
  Link,
  BarChart3,
  Users,
  TrendingUp,
  Clock,
  Zap,
  DollarSign,
  Target,
  PlayCircle,
  Edit3,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react"
import NextLink from "next/link"

const integrations = [
  { name: "Zoom", icon: Video, color: "bg-blue-500" },
  { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
  { name: "Stripe", icon: CreditCard, color: "bg-purple-500" },
  { name: "Google Meet", icon: Video, color: "bg-green-500" },
  { name: "Linktree", icon: Link, color: "bg-green-600" },
  { name: "Website", icon: Globe, color: "bg-blue-600" },
  { name: "Calendar", icon: Calendar, color: "bg-orange-500" },
  { name: "& More", icon: Plus, color: "bg-gray-400", isMore: true },
]

export function AhaMomentSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50/50 via-purple-50/30 to-orange-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-green-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect all your favorite tools and manage your entire yoga business from a single, beautiful dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Yoga Sequencing with Images */}
          <NextLink href="/sequencing" className="block">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Visual Yoga Sequencing</h3>
                  <p className="text-sm text-gray-500">Create sequences with pose images</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl border border-violet-200">
                  <h4 className="font-semibold text-violet-900 mb-3">Morning Flow Sequence</h4>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="aspect-square bg-gradient-to-br from-violet-100 to-violet-200 rounded-lg flex items-center justify-center border border-violet-300">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🧘</div>
                        <span className="text-xs text-violet-700 font-medium">Mountain</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center border border-purple-300">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🙆</div>
                        <span className="text-xs text-purple-700 font-medium">Forward</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center border border-pink-300">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🤸</div>
                        <span className="text-xs text-pink-700 font-medium">Plank</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center border border-rose-300">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🧎</div>
                        <span className="text-xs text-rose-700 font-medium">Child</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-violet-700">12 poses • 45 min</span>
                    <button className="px-3 py-1 bg-violet-500 text-white text-xs rounded-full hover:bg-violet-600 transition-colors">
                      Edit Sequence
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">AI Suggestions</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-blue-200">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Add Sun Salutation A between poses 2-3</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white rounded-lg border border-cyan-200">
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm text-gray-700">Include hip opener for better flow</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">Smart sequencing:</span> AI analyzes pose transitions for safety and
                    flow optimization
                  </p>
                </div>
              </div>
            </div>
          </NextLink>

          {/* Market Research Based Curriculum */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">AI Curriculum Generation</h3>
                <p className="text-sm text-gray-500">Market research-based programs</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-3">Trending Topics Analysis</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-amber-200">
                    <span className="text-sm text-gray-700">Stress Relief Yoga</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-amber-500"></div>
                      </div>
                      <span className="text-xs text-amber-700 font-semibold">80%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-orange-200">
                    <span className="text-sm text-gray-700">Flexibility Training</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-orange-500"></div>
                      </div>
                      <span className="text-xs text-orange-700 font-semibold">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-red-200">
                    <span className="text-sm text-gray-700">Core Strength</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-red-500"></div>
                      </div>
                      <span className="text-xs text-red-700 font-semibold">58%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Generated Curriculum</h4>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-800">"Stress-Free Living" 6-Week Program</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">New</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Based on 847 local searches for stress relief yoga</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">High Demand</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">$89/student</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-xl border border-green-200">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Market-driven:</span> AI analyzes local demand, competitor offerings,
                  and pricing trends
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* One-Click Event Organization */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">One-Click Organization</h3>
                <p className="text-sm text-gray-500">Create events instantly</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Quick Event Creator</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Morning Flow Workshop</span>
                    </div>
                    <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors">
                      Create
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Weekend Retreat</span>
                    </div>
                    <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors">
                      Create
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3">
                      <Edit3 className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">New Class Series</span>
                    </div>
                    <button className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full hover:bg-purple-600 transition-colors">
                      Create
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-xl border border-green-200">
                <p className="text-sm text-green-800">
                  <span className="font-semibold">Auto-filled details:</span> Location, pricing, and descriptions based
                  on your preferences
                </p>
              </div>
            </div>
          </div>

          {/* Content Monetization */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Content Monetization</h3>
                <p className="text-sm text-gray-500">Stable income through targeted content</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-900">Video Sales</span>
                  </div>
                  <p className="text-lg font-bold text-emerald-700">$1,840</p>
                  <p className="text-xs text-emerald-600">this month</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-3 rounded-xl border border-teal-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-900">Reach</span>
                  </div>
                  <p className="text-lg font-bold text-teal-700">12.4K</p>
                  <p className="text-xs text-teal-600">targeted views</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-3">Hyper-Specific Content</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">"Prenatal Yoga for Back Pain" - 847 views</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">"Desk Worker's 10-Min Flow" - 1.2K views</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">"Anxiety Relief Breathing" - 2.1K views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Prevent No-Shows & Retention */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Prevent No-Shows & Fill Classes</h3>
                <p className="text-sm text-gray-500">Smart reminders & waitlist management</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">Smart Reminder System</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-red-600" />
                      <div>
                        <span className="text-sm font-medium text-gray-700">Sarah M. - Morning Flow</span>
                        <p className="text-xs text-gray-500">Reminder sent 2h ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Confirmed</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-orange-600" />
                      <div>
                        <span className="text-sm font-medium text-gray-700">Waitlist: 8 people</span>
                        <p className="text-xs text-gray-500">Auto-fill from waitlist enabled</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">Retention Boost: +23%</span>
                </div>
                <p className="text-xs text-green-700">
                  Personalized reminders based on student preferences and attendance patterns
                </p>
              </div>
            </div>
          </div>

          {/* Student Onboarding & Community */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Student Onboarding & Community</h3>
                <p className="text-sm text-gray-500">End-to-end journey with streaks</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-3">Onboarding Flow</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">Welcome & Goal Setting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">First Class Booking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <span className="text-sm text-gray-700">Community Introduction</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-900">Current Streak</span>
                  </div>
                  <p className="text-lg font-bold text-purple-700">12 days</p>
                  <p className="text-xs text-purple-600">Emma's best yet!</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-3 rounded-xl border border-pink-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-pink-600" />
                    <span className="text-sm font-medium text-pink-900">Community</span>
                  </div>
                  <p className="text-lg font-bold text-pink-700">89</p>
                  <p className="text-xs text-pink-600">active members</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Achievement unlocked:</span> "Consistency Champion" - 10 day streak
                  reward earned!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Dashboard Preview */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Comprehensive Dashboard</h3>
                <p className="text-sm text-gray-500">Track everything that matters</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">Revenue</span>
                  </div>
                  <p className="text-2xl font-bold text-green-700">$3,000</p>
                  <p className="text-xs text-green-600">+12% this month</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-900">Students</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-700">127</p>
                  <p className="text-xs text-purple-600">8 new this week</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-900">Classes</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-700">24</p>
                  <p className="text-xs text-orange-600">this week</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">AI Strategy insights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Provide an additional class on Sun-salutations as waitlist is greater than 15 this week{" "}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Offer an outdoor class this weekend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Chat */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Business Growth Chat</h3>
                <p className="text-sm text-gray-500">AI-powered insights & suggestions</p>
              </div>
            </div>

            <div className="space-y-4 max-h-80 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold">
                  AI
                </div>
                <div className="flex-1 bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg border border-pink-200">
                  <p className="text-sm text-gray-800">
                    Your retention rate increased 15% this month! Consider creating a loyalty program for your most
                    active students.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg max-w-xs">
                  <p className="text-sm">That's great! What kind of loyalty program would work best?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                  You
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold">
                  AI
                </div>
                <div className="flex-1 bg-gradient-to-r from-pink-50 to-rose-50 p-3 rounded-lg border border-pink-200">
                  <p className="text-sm text-gray-800">
                    Based on your data, I suggest a "10 classes = 1 free" program. Your students average 12 classes per
                    month, so this would boost engagement while maintaining profitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Favorite Tools</h3>
            <p className="text-gray-600">Seamlessly integrate with the apps you already use</p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration) => {
              const Icon = integration.icon
              return (
                <div
                  key={integration.name}
                  className={`group relative p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    integration.isMore
                      ? "border-dashed border-2 border-gray-300 bg-gray-50/50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div
                      className={`w-8 h-8 rounded-lg ${integration.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 leading-tight">{integration.name}</span>
                    {!integration.isMore && <div className="w-2 h-2 rounded-full bg-green-500 opacity-80"></div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
