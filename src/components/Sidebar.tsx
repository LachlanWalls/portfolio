import React from 'react'
import { GitHub, Linkedin, Star, X } from 'react-feather'
import './Sidebar.css'

export default function Sidebar ({ isSidebarShowing, setIsSidebarShowing }: { isSidebarShowing: boolean, setIsSidebarShowing: React.Dispatch<React.SetStateAction<boolean>> }) {
  return <div className='sidebar' data-showing={isSidebarShowing}>
    <X size={24} onClick={() => setIsSidebarShowing(false)}/>

    <h1>Lachlan Walls</h1>
    <h3>Full-Stack Web Developer</h3>

    <a href='https://github.com/LachlanWalls' target='_blank' rel='noreferrer'><GitHub size={16} color='white' style={{ marginRight: 6 }}/>Lachlan Walls (formal)</a>
    <a href='https://github.com/dawnniie' target='_blank' rel='noreferrer'><GitHub size={16} color='white' style={{ marginRight: 6 }}/>dawnniie (personal)</a>
    <a href='https://www.linkedin.com/in/lachlanwalls' target='_blank' rel='noreferrer'><Linkedin size={16} color='white' style={{ marginRight: 6 }}/>Lachlan Walls</a>

    <span>Websites</span>
    <a href='#dynodel'>Dynodel <Star size={16}/></a>
    <a href='#lachlanprogramming'>lachlanprogramming <Star size={16}/></a>
    <a href='#lachlanworld'>lachlanworld</a>
    <a href='#lachlantransfer'>lachlantransfer</a>
    <a href='#lachlanblackjack'>lachlanblackjack</a>
    <a href='#sentral'>sentral</a>

    <span>Kettu</span>
    <a href='#kettu-api'>kAPI <Star size={16}/></a>
    <a href='#kettu-bot'>The Bot</a>
    {/* <a href='#kettu-status-page'>Status Page</a> */}
    <a href='#kettu-website'>Website</a>
    <a href='#kettu-kdjs'>kdjs</a>

    <span>Other</span>
    <a href='#moontime'>moontime <Star size={16}/></a>
    <a href='#plob'>plob</a>
    <a href='#github-repo-sync'>github-repo-sync</a>
    <a href='#number-guess-game'>number guess game</a>
  </div>
}