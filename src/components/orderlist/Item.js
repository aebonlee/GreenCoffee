import React from 'react'

const Item = ({dummy}) => {
  return (
    <div className="list_wrap">
          <ul>
            {dummy.map((item) => (
            <li key={item.pk}>
                  <div className="left_area">
                      <div className="img_wrap">
                          <img src={`${item.img}`} alt="" />
                      </div>
                  </div>
                  <div className="right_area">
                      <div className="name">{item.name}</div>
                      <div className="info">
                          <div className="box box01">
                              {item.date} {item.time}
                          </div>
                          <div className="box box02">
                              {item.gps} {item.price}원
                          </div>
                      </div>
                      <div className="state">
                          {item.state}
                      </div>
                  </div>
              </li>
            ))}
          </ul>
      </div>
  )
}

export default Item