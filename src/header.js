import React from 'react'

export const Header = ({m}) => {
  return (
    <>
    <div className='header'>
      <div className='white'>Start Bootstrap</div>
      <div>Home</div>
      <div>About</div>
      <div>shop</div>
      <form>
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill high">{m.length}</span>
                        </button>
                    </form>  
    </div>
    <div className='shop'>
<div className='font'>Shop in style</div>
<div className='innerfont'>with this shop homepage template</div>
    </div>
    </>
  )
}
