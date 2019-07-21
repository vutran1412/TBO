import ItemsCarousel from 'react-items-carousel'
import SeriesIndexItem from '../../series/series_index_item'
import { Link } from 'react-router-dom'
import React from 'react'

class MiniSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItemIndex: 0
        }
    }
    render() {
        let type = this.props.type
        let content = this.props.content
        return (
            <div style={{ "maxHeight": "100%", "marginTop": "50px", "marginLeft": "90px" }}>
                <Link to="/series" >
                    <h1 style={{ "color": "azure", "fontSize": "20px", "marginBottom": "20px" }}>{type}</h1>
                </Link>
                <ItemsCarousel
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={50}
                    numberOfCards={4}
                    slidesToScroll={2}
                    outsideChevron={false}
                    showSlither={true}
                    firstAndLastGutter={false}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={'→'}
                    leftChevron={'←'}
                    style={{ "color": "white", "fontSize": "20px", "display": "flex" }}
                >
                    {Array.from(content.map((show, i) =>
                        <SeriesIndexItem key={show.title} show={show} style={{ "maxWidth": "379px", "height": 0 }} />
                    ))}

                </ItemsCarousel>
            </div>
        )
    }
}

export default MiniSlider