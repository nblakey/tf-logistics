type Props = {
    className?: string
    icon: 'CloseIcon' | 'EmailIcon' | 'FaxIcon' | 'KeyboardArrowDownIcon' | 'KeyboardArrowRightIcon' | 'LaunchIcon' | 'MenuIcon' | 'PhoneIcon'
}

const MaterialIcons = ({ className, icon }: Props) => {
    return (
        <svg className={`mui-icon ${className ? className : ''}`} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid={icon}>
            {icon == 'CloseIcon' && <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>}
            {icon == 'EmailIcon' && <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>}
            {icon == 'FaxIcon' && <path d="M19 9h-1V4H8v16h14v-8c0-1.66-1.34-3-3-3zm-9-3h6v3h-6V6zm4 11h-4v-5h4v5zm2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4.5 8C3.12 8 2 9.12 2 10.5v8C2 19.88 3.12 21 4.5 21S7 19.88 7 18.5v-8C7 9.12 5.88 8 4.5 8z"></path>}
            {icon == 'KeyboardArrowDownIcon' && <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>}
            {icon == 'KeyboardArrowRightIcon' && <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>}
            {icon == 'LaunchIcon' && <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>}
            {icon == 'MenuIcon' && <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>}
            {icon == 'PhoneIcon' && <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>}
        </svg>
    )
}

export default MaterialIcons
