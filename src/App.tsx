/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Bell, 
  Leaf, 
  Sparkles, 
  PlusSquare, 
  Map as MapIcon, 
  Clock, 
  Scale, 
  CheckCircle2, 
  Truck, 
  LayoutDashboard, 
  Navigation, 
  User,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const IMAGES = {
  profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV2V67nkypSpIsfh2M5CwzZhj5le18bXDuZ3Tub3I4sTTvjboUQcgNAx6KGPsDRx7L5UnBvm1sSIYDi861gHowsDmtEI1mOGDLGooSetwRgPpgyC83eDAvVwN3aiifTs6l2naWj0bBa3Bing-dg0X1kkL7k1N3b7NhW6btKYOuw85m2H9yWYMVjNlPPbEYAacVrKkg07eYf-NeVx1AEXzkj5l1Eoo9vRP5KtC-D7MWdbUjzHl6_kDZ_mRCKrRtVd2tLme6hHIWTCtx",
  sourdough: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQFFheBt2HatPKTRdGooiO8S0q4K6Sab14198coJDhf3T3svuW_XOjriZxXSUr_J4Z4KwjonhuF31vcVRQGxCxsEs6pFOMc_nQYBzJIuBvG6-45HERXnA2OLd1JAwEU3T3vyC_qiAXlfX9_rqZuk6w3Z1l37blb6rjSLslKTQ6lERtONkLkIRP8GVlf2vIq7I7S75WZLs6zRYB4TiqOXobR-w2VMBromPW7wIaXXMwaBrrRs61oQ9J3_aNXRpkUGLfwlIiMci6s9_",
  pastries: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKPOdec0G34-wy8LFS8z5_2saDRnj86m36KIBzek0cFSSfhy_u7HOWgBePm49mdF-fvmfEPUYHlsr3MQ-hp7B_4jvlcDYPmGZDI5eW-CLRX8Qxdnhd62B-z4SJq8_ix42MQhZArJQqxik67R4HGkbspWddmNsco1yP4nau5n7awZWLU-Z6RNikPVqmflvrKPPL4CXX8nNwKLkkMXpsVpFS7ySutuFZKgcuCJ1yYP3ic8huRYjsxIfs4S4-IgW603Vyh-AUAVAbAm9Y",
  bagels: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlahWoqg-af1KLaKWVc78lN8xiE-uFqL90oC-_LnE8H2EL4nlgZv8G76tlod37pLZawkzV10vV1XRlDi5BRsdvgGkh9rqYiwYLN1dfb2-nOFxHzVu92w99DIXHW63j8R_KO8Lz8Xk_2SpZtw0Pz10UrtVgCCyw67-myYo4NQxlhlFkxFGKIgFOt1AqI5fjSD88iADhiCRkkSRrUKXVsFu1g_-iWShoEr0CwUOPmrhvyNNJbeEVaj69rXj3k-YKaAzIsJgYsw12d5ry",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJKrmDqSbzM6zeMYV5G1OrtWjDYSsHT6EC-2kuOPIlsU6AvHtn439xWC8RLjmjitlo24gkObheB0Jpx4wr_W4F_r4Ba1G3AlnqzDYf-KSVIVtHIEN6Zt5nfQE-Q3VFpNpxncHoYsjOpf0-WbyhlPv0PHYq20k87wigkVJbcX-sOZnTJg6VSOdo1yegtdvFSRIgvD8ucrQyhDMvNn1C6nNxQFrEqZTsLc4M4GMhTepxf_YjNHjvrUW0HuUOubz27YgqONjh9Yi8Zt1x"
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen pb-28 pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b-2 border-zinc-950 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-zinc-950 overflow-hidden">
            <img 
              src={IMAGES.profile} 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="font-display font-black text-xl tracking-tighter uppercase text-brand-primary">
            FoodRescue AI
          </h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center border-2 border-zinc-950 rounded-lg hover:bg-zinc-100 active:translate-x-0.5 active:translate-y-0.5 transition-all">
          <Bell className="w-6 h-6 text-brand-primary" />
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-5 space-y-6">
        {/* Impact Summary Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-brand-primary text-white p-6 rounded-2xl border-2 border-zinc-950 hard-elevation relative overflow-hidden flex flex-col justify-between min-h-[180px]"
          >
            <div className="z-10">
              <h2 className="font-display font-bold text-2xl mb-1">Daily Impact</h2>
              <p className="font-bold opacity-90 text-sm">Sunbeam Artisanal Bakery</p>
            </div>
            <div className="z-10 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-display font-black text-6xl leading-[0.9]">150</span>
                <span className="font-display text-[10px] font-bold uppercase tracking-widest mt-2">Meals Saved Today</span>
              </div>
              <Leaf className="w-16 h-16 opacity-30 -mb-2 -mr-2" />
            </div>
            {/* Decorative circle */}
            <div className="absolute right-[-20px] top-[-20px] w-48 h-48 bg-brand-primary-container rounded-full opacity-20 pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-secondary-fixed text-brand-on-secondary-fixed p-6 rounded-2xl border-2 border-zinc-950 hard-elevation flex flex-col justify-center items-center text-center space-y-3"
          >
            <Sparkles className="w-10 h-10" />
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-widest">Carbon Offset</p>
              <p className="font-display font-black text-3xl">42.5kg</p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.button 
            whileTap={{ scale: 0.98, x: 2, y: 2 }}
            className="md:col-span-3 bg-brand-secondary-container text-white py-6 px-4 rounded-2xl border-2 border-zinc-950 hard-elevation active-press flex items-center justify-center gap-3 font-display font-black text-xl tracking-tight"
          >
            <PlusSquare className="w-8 h-8" />
            LOG SURPLUS FOOD
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.98, x: 2, y: 2 }}
            className="bg-white text-zinc-950 py-6 px-4 rounded-2xl border-2 border-zinc-950 hard-elevation active-press flex items-center justify-center gap-3 font-display font-black text-lg tracking-tight"
          >
            <MapIcon className="w-6 h-6" />
            ROUTES
          </motion.button>
        </section>

        {/* Recent Donations & Sidebar Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="font-display font-black text-2xl tracking-tight">Recent Donations</h3>
              <button className="text-brand-primary font-bold text-sm underline underline-offset-4 decoration-2 decoration-brand-primary/30 hover:decoration-brand-primary transition-all">View All</button>
            </div>

            <div className="space-y-3">
              <DonationCard 
                image={IMAGES.sourdough}
                title="Assorted Sourdough Loaves"
                status="Awaiting Pickup"
                statusColor="bg-orange-100 text-orange-800 border-orange-800"
                details={[
                  { icon: Clock, text: "10:30 AM" },
                  { icon: Scale, text: "12 kg" }
                ]}
              />
              <DonationCard 
                image={IMAGES.pastries}
                title="Morning Pastry Mix"
                status="Delivered"
                statusColor="bg-green-100 text-green-800 border-green-800"
                details={[
                  { icon: CheckCircle2, text: "Delivered to Food Bank East", iconFill: true }
                ]}
              />
              <DonationCard 
                image={IMAGES.bagels}
                title="Sesame & Plain Bagels"
                status="In Transit"
                statusColor="bg-zinc-100 text-zinc-800 border-zinc-800"
                details={[
                  { icon: Truck, text: "Driver: Sarah K." }
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-950 text-white p-5 rounded-2xl border-2 border-zinc-950 hard-elevation"
            >
              <h4 className="font-display font-bold text-[10px] uppercase tracking-[0.2em] opacity-60 mb-4">Live Courier Map</h4>
              <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden border-2 border-white/10 relative">
                <img 
                  src={IMAGES.map} 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <Truck className="w-10 h-10 text-brand-secondary-container fill-brand-secondary-container drop-shadow-xl" />
                    </motion.div>
                    <div className="bg-white text-zinc-950 text-[10px] px-2 py-0.5 font-black rounded-full mt-2 shadow-sm border border-zinc-900">
                      2 mins away
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-primary-fixed text-brand-on-primary-fixed p-5 rounded-2xl border-2 border-zinc-950 hard-elevation"
            >
              <p className="font-display text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Upcoming Pickup</p>
              <p className="font-bold text-lg">Today, 2:45 PM</p>
              <p className="text-xs font-medium opacity-60">Volunteer: Mike Ross</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t-2 border-zinc-950 flex justify-around items-center px-4 z-50">
        <NavButton 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')} 
          icon={LayoutDashboard} 
          label="Dashboard" 
          color="bg-brand-secondary-container"
        />
        <NavButton 
          active={activeTab === 'routes'} 
          onClick={() => setActiveTab('routes')} 
          icon={Navigation} 
          label="Routes" 
        />
        <NavButton 
          active={activeTab === 'log'} 
          onClick={() => setActiveTab('log')} 
          icon={PlusSquare} 
          label="Log Food" 
        />
        <NavButton 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
          icon={User} 
          label="Profile" 
        />
      </nav>
    </div>
  );
}

function DonationCard({ image, title, status, statusColor, details }: {
  image: string,
  title: string,
  status: string,
  statusColor: string,
  details: { icon: any, text: string, iconFill?: boolean }[]
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white border-2 border-zinc-950 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-50 transition-colors cursor-pointer group"
    >
      <div className="w-16 h-16 bg-zinc-100 rounded-lg border-2 border-zinc-950 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <p className="font-bold text-base truncate pr-2 uppercase font-display tracking-tight leading-tight">{title}</p>
          <span className={`flex-shrink-0 text-[10px] font-black uppercase px-2 py-0.5 rounded border ${statusColor}`}>
            {status}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-zinc-500 text-xs font-semibold">
          {details.map((detail, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <detail.icon className={`w-3.5 h-3.5 ${detail.iconFill ? 'fill-current' : ''}`} />
              {detail.text}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NavButton({ active, onClick, icon: Icon, label, color = "bg-white" }: {
  active: boolean,
  onClick: () => void,
  icon: any,
  label: string,
  color?: string
}) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200
        ${active ? `${color} text-white border-2 border-zinc-950 hard-elevation -translate-y-1` : 'text-zinc-400 hover:text-zinc-900'}
      `}
    >
      <Icon className={`w-6 h-6 ${active ? 'fill-current' : ''}`} />
      <span className="font-display text-[9px] font-black uppercase mt-1 tracking-wider">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-bg"
          className="absolute inset-0 z-[-1]"
        />
      )}
    </button>
  );
}
