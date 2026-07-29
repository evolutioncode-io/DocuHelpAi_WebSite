import { axiosInstance } from './axiosInstance'
import type { PartnerProfile } from '@/types/partner.types'

export type { PartnerProfile }

export const getCurrentPartner = async (): Promise<PartnerProfile> => {
  const response = await axiosInstance.get('/partners/me')
  return response.data.partner
}
