import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { GiEnergyArrow, GiFarmer, GiPartyFlags, GiDetour } from 'react-icons/gi'
import { SiLinuxmint, SiMicrogenetics } from 'react-icons/si'
import { CgCommunity } from 'react-icons/cg'
import { FcCollaboration } from 'react-icons/fc'
import { ImArrowDown } from 'react-icons/im'
import { AiOutlineTeam } from 'react-icons/ai'

export default function ROADMAP() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto flex items-center space-x-4 p-8">
        <GiEnergyArrow className="-rotate-45 font-mono text-4xl text-purple-500" />
        <h2 className=" font-mono text-4xl text-purple-500">ROADMAP</h2>
        <div className="rotate-45">
          <GiEnergyArrow className="rotate-90 font-mono text-4xl text-purple-500" />
        </div>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="MAY 22 - NOV 22"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SiLinuxmint />}
        >
          <h3 className="vertical-timeline-element-title">Minting</h3>
          <h4 className="vertical-timeline-element-subtitle">
            WISHLIST, GIVEAWAYS
          </h4>
          <p>
            The mint for Meta waifus begins. the Wishlisted users will get a
            chance to mint the early Nft's . Followed By NFT give aways
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="NOV - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiFarmer />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            YEILD FARMING, STAKING
          </h4>
          <p>
            We can officially start staking our NFts and year yeild . NFTS will
            be listed in lending/borrowing platform like Avve
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 JAN - 2023 AUG"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiPartyFlags />}
        >
          <h3 className="vertical-timeline-element-title">YATCH PARTY</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            We give Away a yatch party to all holders of this Nft there will be
            Big players incl SnoopDog for the Party
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 AUG - 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<CgCommunity />}
        >
          <h3 className="vertical-timeline-element-title">COMMUNITY ACTIONS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            BITCOIN CONFERENCE PASSES , Creation of a utility decentralized
            currency
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GiDetour />}
        >
          <h3 className="vertical-timeline-element-title">World TOUR</h3>
          <p>A WORLD TOUR WITHH ALL NFT HOLDERS WHERE WE BINGE TOGETHER</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<AiOutlineTeam />}
        >
          <h3 className="vertical-timeline-element-title">COLLABORATION</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Communal Activities with respective NFT charecter Team</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - ...."
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SiMicrogenetics />}
        >
          <h3 className="vertical-timeline-element-title">
            MUTATION OF PROJECTS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Diving into other crypto projects / DAO
          </h4>
          <p>CREATING OUR OWN DAO GOVERNENCE BASED ON RARITY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<ImArrowDown />}
        />
      </VerticalTimeline>
    </div>
  )
}
