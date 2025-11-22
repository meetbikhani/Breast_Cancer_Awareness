"use client"

import type React from "react"

import { useState } from "react"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ConversionComponent() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [fileName, setFileName] = useState<string>("")


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.name.endsWith(".csv")) {
        setError("Please select a CSV file")
        setFile(null)
        return
      }
      setFile(selectedFile)
      setError(null)
      setSuccess(false)
      setFileName(selectedFile.name)
    }
  }

  const handleConvert = async () => {
    if (!file) {
      setError("Please select a file first")
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("http://localhost:3000/convert", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`)
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${file.name.replace(".csv", ".json")}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      setSuccess(true)
      setFile(null)
      setFileName("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during conversion")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white py-6 px-4 sm:px-6 lg:px-8">
      {/* Compact header */}
      <header className="sticky top-0  bg-pink-50/90 backdrop-blur-md  ">
       <Link to="/" className="text-sm font-medium text-pink-600 hover:underline">
              Home
            </Link>
      </header>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-sans text-balance">
            CSV to JSON <span className="text-pink-600">Converter</span>
          </h1>
          <p className="text-lg text-gray-600 font-sans">
            Upload your breast cancer awareness data in CSV format and convert it to JSON
          </p>
        </div>

        <Card className="p-8 border-2 border-pink-200 shadow-lg">
          <div className="space-y-6">
            {/* File Upload Area */}
            <div className="relative">
              <label htmlFor="file-input" className="block mb-4">
                <div className="border-2 border-dashed border-pink-300 rounded-2xl p-12 hover:border-pink-500 hover:bg-pink-50 transition-all cursor-pointer text-center">
                  <Upload className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900 mb-2 font-sans">
                    {file ? `Selected: ${fileName}` : "Choose CSV File"}
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    {file ? "Click to change file" : "Drag and drop your CSV file here"}
                  </p>
                </div>
              </label>
              <input id="file-input" type="file" accept=".csv" onChange={handleFileChange} className="hidden" />
            </div>

            {/* Status Messages */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-sans">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-sans">File converted and downloaded successfully!</p>
              </div>
            )}

            {/* File Info */}
            {file && (
              <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg">
                <p className="text-sm font-sans text-gray-700">
                  <span className="font-semibold">File Size:</span> {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}

            {/* Convert Button */}
            <Button
              onClick={handleConvert}
              disabled={!file || loading}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-sans font-semibold py-6 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Convert & Download JSON
                </>
              )}
            </Button>

            {/* Instructions */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 font-sans">How it works:</h3>
              <ol className="space-y-2 text-sm text-gray-700 font-sans list-decimal list-inside">
                <li>Select your CSV file containing breast cancer data</li>
                <li>Click "Convert & Download JSON" to process the file</li>
                <li>The converted JSON file will download automatically</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
