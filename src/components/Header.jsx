import chefClaudeLogo from '../assets/chef-claude-icon.png'

export default function Header() {
    return (
        <header>
            <img className="header-logo" src={chefClaudeLogo} alt="Chef Claude Logo"/>
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}