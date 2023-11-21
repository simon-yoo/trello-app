'use client'

export type Organization = {
  id: string
  slug: string
  imageUrl: string
  name: string
}
interface NavItemProps {
  isActive: boolean
  isExpanded: boolean
  organization: Organization
  onExpand: (id: string) => void
}
const NavItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: NavItemProps) => {
  return <div>NavItem</div>
}

export default NavItem
