import React, { useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { Box, Users, Lock, Zap } from "lucide-react"

const Button = React.memo(({ children, variant, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors text-sm font-semibold ${
      variant === 'outline'
        ? 'border border-gray-300 hover:bg-gray-100 focus:ring-gray-300 text-gray-800 dark:text-gray-200'
        : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
    }`}
    {...props}
  >
    {children}
  </button>
))

const Input = React.memo(({ className, ...props }) => (
  <input
    className={`px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800 dark:text-gray-200 ${className}`}
    {...props}
  />
))

const NavLink = React.memo(({ href, children }) => (
  <a className="text-sm font-medium hover:text-blue-600 transition-colors" href={href}>
    {children}
  </a>
))

const FeatureCard = React.memo(({ Icon, title, description }) => (
  <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
    <Icon className="h-12 w-12 text-blue-600" aria-hidden="true" />
    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </div>
))

export default function BlockShareLanding() {
  const [account, setAccount] = useState(null)

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
        console.log('Connected to MetaMask:', accounts[0])
        
        const provider = new ethers.providers.Web3Provider(window.ethereum)
      } catch (error) {
        console.error('Error connecting to MetaMask:', error)
      }
    } else {
      alert('MetaMask not detected! Please install the MetaMask extension.')
    }
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    console.log('Form submitted')
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-sm">
        <a className="flex items-center justify-center" href="#" aria-label="BlockShare Home">
          <Box className="h-8 w-8 text-blue-600" aria-hidden="true" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-gray-100">BlockShare</span>
        </a>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <NavLink href="#">Dashboard</NavLink>
          <NavLink href="#">Documents</NavLink>
          <NavLink href="#">Upload</NavLink>
          <NavLink href="#">Demo</NavLink>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Welcome to BlockShare
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-xl md:text-2xl leading-relaxed">
                  Secure, decentralized document verification for the modern world. Share your content with confidence.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Button onClick={connectWallet}>
                  {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect to MetaMask'}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 text-gray-900 dark:text-gray-100">Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                Icon={Users}
                title="Decentralized Sharing"
                description="Share files directly with entities in an authentic and secure way."
              />
              <FeatureCard
                Icon={Lock}
                title="Securely Store Documents"
                description="Your files are encrypted in an immutable ledger called blockchain."
              />
              <FeatureCard
                Icon={Zap}
                title="Lightning Fast Verification"
                description="Experience rapid fast document verification using AI."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">Join BlockShare Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                  Be part of the decentralized revolution. Sign up for our newsletter to stay updated.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mt-6">
                <form className="flex space-x-2" onSubmit={handleSubmit}>
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required aria-label="Email for newsletter" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} BlockShare. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <NavLink href="#">Terms of Service</NavLink>
            <NavLink href="#">Privacy</NavLink>
          </nav>
        </div>
      </footer>
    </div>
  )
}