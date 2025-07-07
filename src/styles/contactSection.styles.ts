import { CONTACT_SECTION_CONSTANTS } from '../constants/contactSection.constants';

const contactSectionStyles = {
  overlay: `fixed inset-0 ${CONTACT_SECTION_CONSTANTS.COLORS.OVERLAY_OPACITY} ${CONTACT_SECTION_CONSTANTS.LAYOUT.BACKDROP_BLUR} flex items-center justify-center ${CONTACT_SECTION_CONSTANTS.SPACING.MODAL_PADDING} ${CONTACT_SECTION_CONSTANTS.Z_INDEX.MODAL}`,
  
  modal: `${CONTACT_SECTION_CONSTANTS.COLORS.MODAL_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.LAYOUT.MODAL_BORDER_RADIUS} ${CONTACT_SECTION_CONSTANTS.LAYOUT.MODAL_PADDING} ${CONTACT_SECTION_CONSTANTS.LAYOUT.SHADOW} ${CONTACT_SECTION_CONSTANTS.LAYOUT.BORDER} w-full ${CONTACT_SECTION_CONSTANTS.LAYOUT.MODAL_MAX_WIDTH} mx-auto relative h-[650px] sm:h-[620px] md:h-[650px] lg:h-[670px] overflow-hidden flex flex-col`,
  
  closeButton: `absolute top-6 right-6 ${CONTACT_SECTION_CONSTANTS.COLORS.MUTED_TEXT} hover:${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 hover:bg-white/5 rounded-full p-2`,
  
  socialContainer: `flex justify-center ${CONTACT_SECTION_CONSTANTS.SPACING.CARD_GAP} mb-4`,
  
  socialLink: `${CONTACT_SECTION_CONSTANTS.COLORS.MUTED_TEXT} hover:${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} transition-all duration-300 ${CONTACT_SECTION_CONSTANTS.COLORS.HOVER_OVERLAY} rounded-xl p-3`,
  
  tabContainer: `flex ${CONTACT_SECTION_CONSTANTS.COLORS.TAB_CONTAINER} ${CONTACT_SECTION_CONSTANTS.COLORS.TAB_BORDER} rounded-xl p-1 mb-4 mx-4 sm:mx-6`,
  
  tabButton: {
    base: `flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center text-sm`,
    active: `${CONTACT_SECTION_CONSTANTS.COLORS.TAB_ACTIVE} ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} shadow-sm`,
    inactive: `${CONTACT_SECTION_CONSTANTS.COLORS.TAB_INACTIVE} ${CONTACT_SECTION_CONSTANTS.COLORS.SECONDARY_TEXT} hover:${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} hover:bg-white/5`,
  },
  
  contentGrid: `grid grid-cols-1 ${CONTACT_SECTION_CONSTANTS.SPACING.CARD_GAP} px-4 sm:px-6 py-3`,
  
  contactCard: `${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BORDER} rounded-xl ${CONTACT_SECTION_CONSTANTS.SPACING.CARD_PADDING}`,
  
  contactHeader: `flex items-center ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_COLOR} mb-4`,
  
  contactIcon: `${CONTACT_SECTION_CONSTANTS.SPACING.ICON_SIZE} ${CONTACT_SECTION_CONSTANTS.SPACING.ICON_MARGIN}`,
  
  contactTitle: `text-lg font-semibold ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT}`,
  
  contactDescription: `${CONTACT_SECTION_CONSTANTS.COLORS.SECONDARY_TEXT} text-sm mb-4 leading-relaxed`,
  
  contactLink: `${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_COLOR} hover:underline text-sm font-medium transition-all duration-300`,
  
  formPlaceholder: `${CONTACT_SECTION_CONSTANTS.SPACING.CARD_PADDING} text-center ${CONTACT_SECTION_CONSTANTS.COLORS.SECONDARY_TEXT}`,
  
  formContainer: `px-4 sm:px-6`,
  
  form: `space-y-3`,
  
  formGroup: `space-y-1`,
  
  formFieldGroup: `space-y-6`,
  
  formRowGroup: `grid grid-cols-1 md:grid-cols-2 gap-4`,
  
  formLabel: `block text-sm font-medium ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} mb-2`,
  
  formInput: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BORDER} rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-sm`,
  
  formInputError: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} border border-red-500/30 rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 hover:border-red-500/20 transition-all duration-300 backdrop-blur-sm text-sm`,
  
  formError: `text-red-400 text-xs mt-1.5 block`,
  
  formSelect: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BORDER} rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 hover:border-white/20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer pr-12 text-sm`,
  
  formSelectError: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} border border-red-500/30 rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 hover:border-red-500/20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer pr-12 text-sm`,
  
  formTextarea: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BORDER} rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 hover:border-white/20 transition-all duration-300 backdrop-blur-sm resize-none text-sm min-h-[120px]`,
  
  formTextareaError: `w-full px-4 py-3.5 ${CONTACT_SECTION_CONSTANTS.COLORS.CARD_BACKGROUND} border border-red-500/30 rounded-xl ${CONTACT_SECTION_CONSTANTS.COLORS.PRIMARY_TEXT} placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 hover:border-red-500/20 transition-all duration-300 backdrop-blur-sm resize-none text-sm min-h-[120px]`,
  
  formSubmitButton: `w-full py-4 px-6 bg-primary-color hover:bg-primary-color/90 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary-color/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base mt-6`,
  
  customSelectWrapper: `relative`,
  
  customSelectDropdown: `absolute top-full left-0 w-full mt-2 bg-bg-dark/95 border border-white/10 rounded-xl backdrop-blur-sm shadow-xl z-50 max-h-60 overflow-y-auto`,
  
  customSelectOption: `px-4 py-3.5 text-white hover:bg-white/10 cursor-pointer transition-all duration-200 first:rounded-t-xl last:rounded-b-xl text-sm`,
  
  customSelectOptionSelected: `px-4 py-3.5 text-white bg-white/15 cursor-pointer transition-all duration-200 first:rounded-t-xl last:rounded-b-xl text-sm border-l-2 border-primary-color`,
  
  availabilityContainer: 'mt-1 text-center',
  
  availabilityBadge: `inline-flex items-center ${CONTACT_SECTION_CONSTANTS.COLORS.AVAILABILITY_BACKGROUND} ${CONTACT_SECTION_CONSTANTS.COLORS.AVAILABILITY_TEXT} rounded-full px-4 py-3 text-sm font-medium border border-green-500/20`,
  
  availabilityDot: `${CONTACT_SECTION_CONSTANTS.SPACING.STATUS_DOT_SIZE} ${CONTACT_SECTION_CONSTANTS.COLORS.AVAILABILITY_DOT} rounded-full mr-3 animate-pulse`,
} as const;

export default contactSectionStyles;
