import React, { memo } from 'react';
import { Sparkle, Zap } from 'lucide-react';
import { SKILLS_SECTION_CLASSES } from '../../config/skills.enhanced.config';
import { SKILLS_ACCESSIBILITY } from '../../constants/skills.enhanced.constants';

interface SkillsSectionHeaderProps {
  readonly title: string;
  readonly subtitle: string;
  readonly showIcons?: boolean;
}

const HeaderIcon = memo(({ 
  Icon, 
  className, 
  ariaLabel 
}: { 
  readonly Icon: React.ComponentType<{ className?: string }>;
  readonly className: string;
  readonly ariaLabel: string;
}) => (
  <span className={SKILLS_SECTION_CLASSES.header.iconAccent} aria-label={ariaLabel}>
    <Icon className={className} />
  </span>
));

HeaderIcon.displayName = 'HeaderIcon';

const HeaderTitle = memo(({ 
  title, 
  showIcons 
}: { 
  readonly title: string; 
  readonly showIcons: boolean; 
}) => (
  <h2 
    className={SKILLS_SECTION_CLASSES.header.title}
    role={SKILLS_ACCESSIBILITY.headerRole}
    aria-level={SKILLS_ACCESSIBILITY.headerLevel}
  >
    {showIcons && (
      <HeaderIcon
        Icon={Sparkle}
        className={SKILLS_SECTION_CLASSES.header.iconSparkle}
        ariaLabel="Ícone decorativo de brilho"
      />
    )}
    <span>{title}</span>
    {showIcons && (
      <HeaderIcon
        Icon={Zap}
        className={SKILLS_SECTION_CLASSES.header.iconZap}
        ariaLabel="Ícone decorativo de raio"
      />
    )}
  </h2>
));

HeaderTitle.displayName = 'HeaderTitle';

const HeaderSubtitle = memo(({ subtitle }: { readonly subtitle: string }) => (
  <p className={SKILLS_SECTION_CLASSES.header.subtitle}>
    {subtitle}
  </p>
));

HeaderSubtitle.displayName = 'HeaderSubtitle';

export const SkillsSectionHeader: React.FC<SkillsSectionHeaderProps> = memo(({
  title,
  subtitle,
  showIcons = true,
}) => (
  <header role="banner">
    <HeaderTitle title={title} showIcons={showIcons} />
    <HeaderSubtitle subtitle={subtitle} />
  </header>
));

SkillsSectionHeader.displayName = 'SkillsSectionHeader';
