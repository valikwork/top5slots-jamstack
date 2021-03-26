import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactUsForm from "../components/ContactUsForm"
import shortid from 'shortid';
import GoogleMapReact from 'google-map-react';

export const query = graphql`
query($id: ID!) {
	wpgraphql {
		page(id: $id) {
			title
			uri
			seo {
				metaDesc
				title
				opengraphType
			}
			tmpl_contact_us {
				formHeading
				formSubheading
				gravityFormId
				address
				telephone
				email
				mapLatitude
				mapLongitude
				backgroundImage {
					mediaItemUrl
				}
			}
		}

		themeFooterSettings {
			opt_footer {
				socialLinks {
					link
					logo {
						mediaItemUrl
					}
				}
			}
		}
	}
}
`

export default function ContactUsPage({ data }) {
	const { socialLinks } = data.wpgraphql.themeFooterSettings.opt_footer
	const { page } = data.wpgraphql
		
	
	console.log(page)
	const pageCssClass = "contact-page"
	const mapSettings = {
		lat: page.tmpl_contact_us.mapLatitude || 59.955413,
		lng: page.tmpl_contact_us.mapLongitude || 30.337844,
	}

	return (
		<Layout className={pageCssClass}>
			<div className={`${pageCssClass}-wrap`} style={{ backgroundImage: `url(${page.tmpl_contact_us.backgroundImage.mediaItemUrl})`}}>
				<div className={`${pageCssClass}-content-box`}>
					{ page.tmpl_contact_us.formHeading && <h1 className={`${pageCssClass}__heading`} >{page.tmpl_contact_us.formHeading}</h1> }
					<div className={`${pageCssClass}-form-box`}>
						<p>{page.tmpl_contact_us.formSubheading}</p>
						<ContactUsForm formID={page.tmpl_contact_us.gravityFormId} />
					</div>
					<div className={`${pageCssClass}-info-box`}>

						<div className={`${pageCssClass}-info-box--address`}>
							<svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 4.25C6.45833 4.25 5.57292 4.61458 4.84375 5.34375C4.11458 6.07292 3.75 6.95833 3.75 8C3.75 9.04167 4.11458 9.92708 4.84375 10.6562C5.57292 11.3854 6.45833 11.75 7.5 11.75C8.54167 11.75 9.42708 11.3854 10.1562 10.6562C10.8854 9.92708 11.25 9.04167 11.25 8C11.25 6.95833 10.8854 6.07292 10.1562 5.34375C9.42708 4.61458 8.54167 4.25 7.5 4.25ZM7.5 10.5C6.82292 10.5 6.23698 10.2526 5.74219 9.75781C5.2474 9.26302 5 8.67708 5 8C5 7.32292 5.2474 6.73698 5.74219 6.24219C6.23698 5.7474 6.82292 5.5 7.5 5.5C8.17708 5.5 8.76302 5.7474 9.25781 6.24219C9.7526 6.73698 10 7.32292 10 8C10 8.67708 9.7526 9.26302 9.25781 9.75781C8.76302 10.2526 8.17708 10.5 7.5 10.5ZM7.5 0.5C6.14583 0.5 4.89583 0.838542 3.75 1.51562C2.60417 2.19271 1.69271 3.10417 1.01562 4.25C0.338542 5.39583 0 6.64583 0 8C0 8.83333 0.104167 9.57552 0.3125 10.2266C0.520833 10.8516 0.924479 11.6328 1.52344 12.5703C1.9401 13.2214 2.79948 14.4844 4.10156 16.3594L6.71875 20.1094C6.90104 20.3698 7.16146 20.5 7.5 20.5C7.83854 20.5 8.09896 20.3698 8.28125 20.1094L10.8984 16.3594C12.2005 14.4844 13.0599 13.2214 13.4766 12.5703C14.0755 11.6328 14.4792 10.8516 14.6875 10.2266C14.8958 9.57552 15 8.83333 15 8C15 6.64583 14.6615 5.39583 13.9844 4.25C13.3073 3.10417 12.3958 2.19271 11.25 1.51562C10.1042 0.838542 8.85417 0.5 7.5 0.5ZM7.5 19.0156C6.875 18.1042 6.06771 16.9453 5.07812 15.5391C3.82812 13.7422 3.00781 12.5573 2.61719 11.9844C2.07031 11.099 1.70573 10.3958 1.52344 9.875C1.34115 9.32812 1.25 8.70312 1.25 8C1.25 7.16667 1.40625 6.3724 1.71875 5.61719C2.03125 4.86198 2.48698 4.1849 3.08594 3.58594C3.6849 2.98698 4.36198 2.53125 5.11719 2.21875C5.8724 1.90625 6.66667 1.75 7.5 1.75C8.33333 1.75 9.1276 1.90625 9.88281 2.21875C10.638 2.53125 11.3151 2.98698 11.9141 3.58594C12.513 4.1849 12.9688 4.86198 13.2812 5.61719C13.5938 6.3724 13.75 7.16667 13.75 8C13.75 8.70312 13.6589 9.32812 13.4766 9.875C13.2943 10.3958 12.9297 11.099 12.3828 11.9844C11.9922 12.5573 11.1719 13.7422 9.92188 15.5391L7.5 19.0156Z" fill="#C2A57B"/>
							</svg>
							<p>{page.tmpl_contact_us.address}</p>
						</div>
						<div className={`${pageCssClass}-info-box--phone`}>
							<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.5625 20.0625L20.4609 16.1172C20.5391 15.8307 20.5 15.5573 20.3438 15.2969C20.2135 15.0365 20.0182 14.8411 19.7578 14.7109L15.5391 12.9141C15.2786 12.8099 15.0182 12.7839 14.7578 12.8359C14.4974 12.9141 14.276 13.0573 14.0938 13.2656L12.375 15.375C11.0208 14.6979 9.8099 13.8255 8.74219 12.7578C7.67448 11.6901 6.80208 10.4792 6.125 9.125L8.23438 7.40625C8.44271 7.22396 8.57292 7.0026 8.625 6.74219C8.70312 6.48177 8.6901 6.22135 8.58594 5.96094L6.78906 1.74219C6.65885 1.48177 6.46354 1.27344 6.20312 1.11719C5.94271 0.986979 5.66927 0.960937 5.38281 1.03906L1.4375 1.9375C1.17708 2.01562 0.955729 2.15885 0.773438 2.36719C0.591146 2.60156 0.5 2.86198 0.5 3.14844C0.5 6.3776 1.30729 9.3724 2.92188 12.1328C4.51042 14.8411 6.64583 16.9766 9.32812 18.5391C12.1146 20.1797 15.1354 21 18.3906 21C18.651 21 18.8854 20.9089 19.0938 20.7266C19.3281 20.5443 19.4844 20.3229 19.5625 20.0625ZM1.75 3.14844L5.65625 2.25L7.45312 6.46875L4.60156 8.77344C5.53906 10.8047 6.61979 12.4323 7.84375 13.6562C9.06771 14.8802 10.6953 15.9609 12.7266 16.8984L15.0312 14.0469L19.25 15.8438L18.3516 19.75C15.3568 19.75 12.5703 18.9948 9.99219 17.4844C7.46615 16 5.47396 14.0078 4.01562 11.5078C2.50521 8.92969 1.75 6.14323 1.75 3.14844Z" fill="#C2A57B"/>
							</svg>
							<a href={`tel:${page.tmpl_contact_us.telephone}`}>{page.tmpl_contact_us.telephone}</a>
						</div>
						<div className={`${pageCssClass}-info-box--email`}>
							<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.125 0L1.875 0C1.35417 0 0.911458 0.182292 0.546875 0.546875C0.182292 0.911458 0 1.35417 0 1.875L0 13.125C0 13.6458 0.182292 14.0885 0.546875 14.4531C0.911458 14.8177 1.35417 15 1.875 15H18.125C18.6458 15 19.0885 14.8177 19.4531 14.4531C19.8177 14.0885 20 13.6458 20 13.125V1.875C20 1.35417 19.8177 0.911458 19.4531 0.546875C19.0885 0.182292 18.6458 0 18.125 0ZM1.875 1.25L18.125 1.25C18.3073 1.25 18.4505 1.3151 18.5547 1.44531C18.6849 1.54948 18.75 1.69271 18.75 1.875V3.47656C17.8385 4.25781 15.8724 5.84635 12.8516 8.24219L12.4609 8.55469C11.9401 8.9974 11.5365 9.3099 11.25 9.49219C10.7552 9.83073 10.3385 10 10 10C9.66146 10 9.24479 9.83073 8.75 9.49219C8.4375 9.3099 8.02083 8.9974 7.5 8.55469L7.14844 8.24219C4.1276 5.84635 2.16146 4.25781 1.25 3.47656V1.875C1.25 1.69271 1.30208 1.54948 1.40625 1.44531C1.53646 1.3151 1.69271 1.25 1.875 1.25ZM18.125 13.75H1.875C1.69271 13.75 1.53646 13.6979 1.40625 13.5938C1.30208 13.4635 1.25 13.3073 1.25 13.125L1.25 5.11719C2.16146 5.84635 3.86719 7.21354 6.36719 9.21875L6.75781 9.53125C7.35677 10.0521 7.85156 10.4297 8.24219 10.6641C8.89323 11.0547 9.47917 11.25 10 11.25C10.5208 11.25 11.1068 11.0547 11.7578 10.6641C12.1224 10.4297 12.6172 10.0521 13.2422 9.53125L13.6328 9.21875C16.1328 7.21354 17.8385 5.84635 18.75 5.11719V13.125C18.75 13.3073 18.6849 13.4635 18.5547 13.5938C18.4505 13.6979 18.3073 13.75 18.125 13.75Z" fill="#C2A57B"/>
							</svg>
							<a href={`mailto:${page.tmpl_contact_us.email}`}>{page.tmpl_contact_us.email}</a>
						</div>
						{socialLinks && (
                        <div className={`${pageCssClass}-info-box--soc-link`}>
                            {socialLinks.map(socLink => {
                                return  <a key={shortid.generate()} href={socLink.link}><img src={socLink.logo.mediaItemUrl} alt=""/></a>
                            })}
                        </div>)}
						<div className={`${pageCssClass}-info-box--map`}>
							<GoogleMapReact
								bootstrapURLKeys={{ key: 'AIzaSyDDzTqAPvPmduUwVVFkyaTYhZG3hmnulO0' }}
								defaultCenter={mapSettings}
								defaultZoom={11}
							>
								<span lat={mapSettings.lat} lng={mapSettings.lng} text="My Marker">+</span>
							</GoogleMapReact>
						</div>

					</div>
				</div>
			</div>
		</Layout>
	)
}
