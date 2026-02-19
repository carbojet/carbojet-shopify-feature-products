# Carbojet Shopify Feature Products

A Shopify embedded application for managing product inventory transfers and features with an intuitive admin interface.

## Overview

This is a Next.js-based Shopify embedded app that integrates with the Shopify Admin API to help merchants manage product inventory transfers and select featured products.

This is a Shopify embedded application built with Next.js and React that integrates with the Shopify Admin API. It's designed to help manage products and inventory features within the Shopify ecosystem.

Key Components:
Technology Stack:

Framework: Next.js 10.0.3 with React 17
Language: JavaScript
UI Framework: Shopify Polaris (v5.10.1) - Shopify's official design system
Server: Koa 2.13.0 (Node.js framework)
API Integration: Apollo GraphQL + Shopify's GraphQL Proxy
Authentication: Shopify's built-in OAuth via @shopify/koa-shopify-auth
How It Works:
Backend Server (server.js):

Uses Koa server to handle requests
Implements Shopify authentication and OAuth flow
Proxies GraphQL requests to the Shopify API
Requests required scopes:
read_products & write_products (manage products)
read_script_tags & write_script_tags (manage scripts)
Uses sessions for security with cookies
Frontend (React Pages):

_app.js - Root application wrapper that applies Shopify's Polaris theme
index.js - Main landing page with an empty state UI component showing:
"Manage your inventory transfers" heading
Options to "Add transfer" and "Select Product"
Testing setup for Shopify Polaris components
Purpose:
This appears to be a Shopify feature management app focused on:

Managing product inventory transfers
Selecting and manipulating products in bulk
Providing a clean admin interface using Shopify Polaris design components

## Features

- **Product Management**: Read and write product data via Shopify GraphQL API
- **Script Tag Management**: Manage custom scripts and tags for products
- **Shopify Polaris UI**: Uses Shopify's official design system for consistent UX
- **OAuth Authentication**: Secure authentication using Shopify's built-in OAuth flow
- **Inventory Transfer**: Manage and track product inventory transfers

## Tech Stack

- **Frontend**: React 17, Next.js 10
- **UI Components**: Shopify Polaris 5.10.1
- **Backend**: Node.js 12.x with Koa 2
- **API**: Shopify GraphQL API with Apollo Client
- **Authentication**: @shopify/koa-shopify-auth

## Setup

### Prerequisites
- Node.js 12.x or higher
- A Shopify app configured with API credentials

### Installation

```bash
npm install
