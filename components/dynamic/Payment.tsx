import { LANG_ENGLISH } from '../../utils/constants';
import BlogLayout from '../BlogLayout';

const Payment = () => {
  return (
    <>
      <BlogLayout lang={LANG_ENGLISH}>
        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">Payment and shipping</h3>

          <h5 className="h6 mb-2">The following conditions apply:</h5>
          <h5 className="h6 mb-2">Shipping conditions</h5>
          <p className="mb-4">
            The delivery takes place within Germany and into the countries
            below. Shipping costs (inclusive legal value added tax) Deliveries
            within Germany: We calculate the shipping costs flatly with 5.95 €
            per order.
          </p>

          <h5 className="h6 mb-2">Deliveries abroad:</h5>
          <p className="mb-1">
            We calculate the shipping costs abroad flat rate as follows:
          </p>
          <p className="mb-1">EU countries:14,95 € </p>
          <p className="mb-4">Non-EU contries: 35,95 €</p>

          <h5 className="h6 mb-2">delivery periods</h5>
          <p className="mb-4">
            Unless otherwise specified in the item description, the delivery of
            the goods in Germany within 3 - 5 working days, for foreign
            deliveries within Europe within about 5 - 7 days after order
            confirmation (for agreed advance payment after the date of your
            payment order).{' '}
          </p>
          <p>
            Please note that there is no delivery on Sundays and public
            holidays. If you have ordered items with different delivery times,
            we will ship the goods in a single shipment, unless we have agreed
            otherwise with you. The delivery time in this case is determined by
            the article with the longest delivery time you have ordered.
          </p>

          <h5 className="h6 mb-2">Terms of payment</h5>
          <p className="mb-2">
            For deliveries within Germany you have the following payment
            options:
            <br /> - Payment by PayPal
          </p>
          <p className="mb-2">
            For deliveries abroad you have the following payment options:
            <br /> - Payment by PayPal
          </p>
          <p className="mb-4">
            If you have any questions, you will find our contact details in the
            imprint.
          </p>
        </div>
      </BlogLayout>
    </>
  );
};

export default Payment;
