import Title from "./Title/Title";

const Header = () => {
    return (
        <div style={{borderBottom: '0.2px solid gray'}}>
        <div style={{textAlign: 'left', marginLeft: '30px', marginBottom: '40px', marginTop: '30px'}}>
            <Title/>
        </div>
        </div>
    )
}

export default Header;