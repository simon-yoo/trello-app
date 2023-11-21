'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion } from '@/components/ui/accordion'
interface SidebarProps {
  storageKey?: string
}

const Sidebar = ({ storageKey }: SidebarProps) => {
  return <div>Sidebar</div>
}

export default Sidebar
