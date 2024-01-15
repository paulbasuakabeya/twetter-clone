function PropsHome({ imageTwo, incrementTwo, altTwo, classColorHovertwo, imageHovertwo, convertir }) {
  return (
    <>
      <div className={classColorHovertwo}>
        <div className={imageHovertwo}>
          <img src={imageTwo} alt={altTwo} />
        </div>
        <p>{incrementTwo}{convertir}</p>
      </div>
    </>

  )
}
export default PropsHome;