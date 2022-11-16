export default class Component2 extends React.Component {
    render() {
        const {names} = this.props;
        console.log(names);
        
        return (
            <ul>{
                names.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))
                }</ul>
        )
    }
}