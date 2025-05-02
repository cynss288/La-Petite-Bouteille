"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    size: "",
    pickupDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("感謝您的訂單！我們將盡快與您聯繫。")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      cakeType: "",
      size: "",
      pickupDate: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">姓名</Label>
          <Input id="name" placeholder="請輸入您的姓名" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">電子郵件</Label>
          <Input
            id="email"
            type="email"
            placeholder="請輸入您的電子郵件"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">聯絡電話</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="請輸入您的聯絡電話"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="cakeType">蛋糕款式</Label>
          <Select onValueChange={(value) => handleSelectChange("cakeType", value)}>
            <SelectTrigger id="cakeType">
              <SelectValue placeholder="請選擇基本款式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chocolate">經典巧克力蛋糕</SelectItem>
              <SelectItem value="strawberry">草莓鮮奶油蛋糕</SelectItem>
              <SelectItem value="caramel">焦糖海鹽蛋糕</SelectItem>
              <SelectItem value="fruit">繽紛水果蛋糕</SelectItem>
              <SelectItem value="custom">其他客製款式</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="size">蛋糕尺寸</Label>
          <Select onValueChange={(value) => handleSelectChange("size", value)}>
            <SelectTrigger id="size">
              <SelectValue placeholder="請選擇尺寸" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6吋 (適合3-5人)</SelectItem>
              <SelectItem value="8">8吋 (適合6-8人)</SelectItem>
              <SelectItem value="10">10吋 (適合9-12人)</SelectItem>
              <SelectItem value="12">12吋 (適合15-20人)</SelectItem>
              <SelectItem value="custom">客製尺寸</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="pickupDate">希望取貨/配送日期</Label>
          <Input id="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">特殊需求與說明</Label>
          <Textarea
            id="message"
            placeholder="請詳細描述您的蛋糕需求，包括主題、顏色、口味偏好、裝飾等具體細節"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px]"
          />
        </div>

        <Button type="submit" className="w-full bg-rose-400 hover:bg-rose-500">
          送出訂單
        </Button>
      </div>
    </form>
  )
}
