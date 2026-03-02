import { Container } from "./Container";

export function PageHero({ 
  badge, 
  title, 
  description, 
  breadcrumbs = [],
  badges = [],
  quickInfo = [],
  backgroundImage
}) {
  return (
    <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white pt-36 pb-24 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/75 via-brand-navy/70 to-brand-navy-dark/75"></div>
        </div>
      )}
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      
      <Container>
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-3 mb-10 animate-fade-in-down">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-3">
                  {index > 0 && (
                    <svg className="w-4 h-4 text-brand-gold-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-brand-gold-light/70 hover:text-brand-gold transition-colors duration-300 text-sm font-medium">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-brand-gold text-sm font-semibold">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className="inline-block px-5 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30 mb-8 animate-fade-in-down">
              <span className="text-sm font-semibold text-brand-gold-light tracking-wide uppercase">{badge}</span>
            </div>
          )}

          {/* Badges Array */}
          {badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
              {badges.map((badgeItem, index) => (
                <span key={index} className={`inline-flex items-center px-5 py-2.5 backdrop-blur-sm rounded-full text-sm font-semibold border ${badgeItem.className || 'bg-white/10 text-white border-white/20'}`}>
                  {badgeItem.icon && <span className="mr-2">{badgeItem.icon}</span>}
                  {badgeItem.label}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 animate-fade-in-up animation-delay-200 leading-[1.1] tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-xl md:text-2xl lg:text-3xl text-brand-gold-light/95 leading-relaxed font-light animate-fade-in-up animation-delay-400 max-w-4xl">
              {description}
            </p>
          )}

          {/* Quick Info */}
          {quickInfo.length > 0 && (
            <div className={`grid grid-cols-2 md:grid-cols-${quickInfo.length} gap-4 mt-12 animate-fade-in-up animation-delay-500`}>
              {quickInfo.map((info, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                  <p className="text-brand-gold-light/70 text-sm font-medium mb-1">{info.label}</p>
                  <p className="text-white font-bold text-lg">{info.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
