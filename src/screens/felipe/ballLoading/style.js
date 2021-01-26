import styled from 'styled-components'

export const WrapperLoading = styled.div`
    width:200px;
    height:100px;
    // it is absolute to facilitate the movement of the module
    position:absolute;
    left:1000px;
    top:100px;
`
export const Circle = styled.div`
    width:20px;
    height:20px;
    position:absolute;
    border-radius: 50%;
    background-color: black;
    animation: circle .5s alternate infinite ease;
    :nth-child(2){
    animation-delay: .2s;
    left:45%;
}
    :nth-child(3){
    animation-delay: .3s;
    left:90%
}
    
@keyframes circle{
    0%{
        top:60px;
        height:5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.5);
    }
    40%{
        height:20px;
        border-radius: 50%;
        transform: scaleX(1);
    }
    100%{
        top:0%;
    }
}
`

export const Shadow = styled.div`
    width:20px;
    height:4px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top:62px;
    transform-origin: 50%;
    z-index: -1;
    filter: blur(1px);
    animation: shadow .5s alternate infinite ease;
    
    @keyframes shadow{
    0%{
        transform: scaleX(1.5);
    }
    40%{
        transform: scaleX(1);
        opacity: .7;
    }
    100%{
        transform: scaleX(.2);
        opacity: .4;
    }
}
    :nth-child(4){
    animation-delay: .2s;
    left:45%;
}
    :nth-child(5){
    animation-delay: .3s;
    left:90%;
}
`
export const Title = styled.span`
    font-family: 'Lato';
    font-size: 20px;
    letter-spacing: 12px;
    position:absolute;
    top:70%;
`