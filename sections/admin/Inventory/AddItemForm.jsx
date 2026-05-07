import Link from 'next/link'
import React from 'react'

const AddItemForm = () => {
  return (
      <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
        <form className="space-y-6">
          
          {/* PRODUCT NAME */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-heading mb-2">
              Product Name
            </label>
            <input 
              id="productName"
              name="productName"
              type="text" 
              placeholder="e.g. Handwoven Silk Scarf" 
              className="w-full px-4 py-3 border border-border rounded-md bg-body text-body-text placeholder:text-muted-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow"
              required
            />
          </div>

          {/* CATEGORY & PRICE (Using CSS Grid for side-by-side layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-heading mb-2">
                Category
              </label>
              <select 
                id="category"
                name="category"
                defaultValue=""
                className="w-full px-4 py-3 border border-border rounded-md bg-body text-body-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>Select a category</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="home">Home Decor</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-heading mb-2">
                Price (₹)
              </label>
              <div className="relative">
                {/* Absolutely positioned Rupee symbol */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none">
                  ₹
                </span>
                <input 
                  id="price"
                  name="price"
                  type="number" 
                  min="0"
                  step="0.01"
                  placeholder="0.00" 
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-md bg-body text-body-text placeholder:text-muted-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>

          {/* STOCK QUANTITY */}
          <div className="w-full md:w-1/2 pr-3">
            <label htmlFor="stock" className="block text-sm font-medium text-heading mb-2">
              Stock Quantity
            </label>
            <input 
              id="stock"
              name="stock"
              type="number" 
              min="0"
              placeholder="e.g. 15" 
              className="w-full px-4 py-3 border border-border rounded-md bg-body text-body-text placeholder:text-muted-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-heading mb-2">
              Description
            </label>
            <textarea 
              id="description"
              name="description"
              rows="4"
              placeholder="Describe the craftsmanship, materials, and origin..." 
              className="w-full px-4 py-3 border border-border rounded-md bg-body text-body-text placeholder:text-muted-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
            ></textarea>
          </div>

          {/* IMAGE UPLOAD UI */}
          <div>
            <label className="block text-sm font-medium text-heading mb-2">
              Product Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-10 pb-12 border-2 border-dashed border-section rounded-lg hover:bg-section-2 transition-colors cursor-pointer group">
              <div className="space-y-2 text-center">
                {/* Upload Icon */}
                <div className="mx-auto h-12 w-12 bg-section-2 text-primary rounded-md flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div className="text-sm text-body-text">
                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                </div>
                <p className="text-xs text-muted-text">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>

          {/* 3. FORM ACTIONS */}
          <div className="pt-6 border-t border-border flex items-center justify-end gap-4 mt-8">
            <Link href={"/admin/inventory"}>
            <button 
              type="button" // type="button" prevents it from submitting the form!
              className="px-6 py-2.5 border border-border rounded-md text-sm font-medium text-body-text hover:bg-body transition-colors"
              > 
              Cancel
            </button>
            </Link>
            <button 
              type="submit" // type="submit" triggers the actual form submission
              className="px-6 py-2.5 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm"
            >
              Save Product
            </button>
          </div>

        </form>
      </div>
  )
}

export default AddItemForm