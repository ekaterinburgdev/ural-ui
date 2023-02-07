import classNames from 'classnames';
import styles from './AnimatedLogo.module.css';

export interface Props {
  radius?: string;
  time?: string;
  displacement?: string;
  shadow?: string;
  shadowed?: boolean;
  active?: boolean;
  color?: string;
  withLogoHover?: boolean;
}

export function AnimatedLogo({
  time = '10s',
  radius = '50vmin',
  displacement = '2.5%',
  shadow = '10vh',
  shadowed = false,
  active = false,
  color = 'white',
  withLogoHover = false,
}: Props) {
  return (
    <>
      <div
        className={classNames(styles.circles, {
          [styles.circles_shadowed]: shadowed,
          [styles.circles_active]: active,
          [styles.circles_with_hover]: withLogoHover,
        })}
        style={
          {
            '--spin-time': time,
            '--circle-size': radius,
            '--circle-stroke': `calc(${radius} * 0.085)`,
            '--circle-stroke-hover': `calc(${radius} * 0.105)`,
            '--circle-stroke-active': `calc(${radius} * 0.5)`,
            '--displacement': displacement,
            '--shadow-size': shadow,
            '--shadow-opacity': 0.35,
            '--transition-duration': '0.2s',
            '--transition-timing-function': 'ease-in-out',
          } as React.CSSProperties
        }
      >
        <div className={classNames(styles.circle, styles.first)}></div>
        <div className={classNames(styles.circle, styles.second)}></div>
        <div className={classNames(styles.circle, styles.third)}></div>
        <div className={styles.logo}>
          <svg
            fill="none"
            height="60"
            viewBox="0 0 60 60"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m20.1001 40.7095c-.0019-.1029-.0242-.2045-.0654-.2989s-.1006-.1797-.1748-.2512c-.0741-.0714-.1617-.1275-.2576-.1651-.0958-.0376-.1982-.056-.3011-.054l-.0064.0001h-1.049v1.5038h1.0137c.5262 0 .8406-.385.8406-.7347zm-1.8552-2.3081h.5943c.4901 0 .7355-.3144.7355-.6641s-.2454-.6641-.7355-.6641h-.5951zm4.0591 2.4133c0 1.1532-.8405 2.3073-2.4813 2.3073h-4.6567v-1.6812h.8044v-4.3709h-.8044v-1.7097h4.1104c1.5853 0 2.3628 1.0137 2.3628 2.1013-.0048.5369-.2182 1.0509-.5951 1.4333.9111.4161 1.2608 1.1507 1.2608 1.9199zm16.2835-23.6376v2.536h1.6476v-.8448h.9347v4.36h-.8011v1.6904h3.9179v-1.6904h-.8456v-4.3601h.9347v.8449h1.6921v-2.5361zm-12.648 12.6622h1.0432c.6985 0 1.2709-.2521 1.2709-.9481 0-.7397-.5749-.9448-1.2734-.9448h-1.0407zm.6649 4.1961h-3.8489v-1.7173h.9103v-4.3709h-.9103v-1.6442h4.734c2.0712 0 3.1152 1.1298 3.1152 2.5663-.0082.4725-.1423.9342-.3885 1.3376-.2461.4034-.5955.7338-1.0119.9572.1395.8405.8691 1.154 1.7728 1.154h1.4457v-4.3709h-1.2272v-1.6442h4.6542v1.6442h-1.223v4.3709h1.2247v1.7131h-4.9711c-2.2536 0-3.3219-.8742-3.8456-2.5217h-1.0927v.8044h.6648v1.714zm7.7921-13.0725h1.3802l-.7145-1.8728zm-7.8122 3.9599h-3.8288v-1.6945h.9347v-4.3601h-.9347v-1.6912h3.9178v1.6912h-.7565v1.3349h.8019c1.0239 0 1.6476-.4901 1.6476-1.3349h-.6683v-1.6912h3.6985v1.6912h-.938c0 1.1567-.8019 2.1351-1.603 2.5806.2219 1.2011.9112 1.7795 2.4242 1.6912l1.6921-4.2718h-.5792v-1.6912h4.3634l2.3158 6.0521h.8011v1.6904h-3.9188v-1.6912h.6211l-.1782-.5784h-2.5805l-.1782.5784h.712v1.6903h-1.5383c-2.6714 0-3.021 0-4.0011-.4001-.9347-.4001-1.6476-1.3793-2.004-2.6251h-.8901v1.3349h.6675zm-4.4668 9.1194h-6.9507v-1.6879h.8456v-4.36h-.8456v-1.6913h6.9507v2.5814h-1.7408v-.8901h-2.1376v1.2902h2.0039v1.6904h-2.0039v1.3819h2.1376v-.8901h1.7358zm19.8895-7.7382h3.9876v1.6432h-.8405v6.0815h-2.4847l-3.0479-4.4012v2.6898h.9044v1.7131h-4.0213v-1.7131h.9112v-4.3709h-.9112v-1.6434h3.327l3.1177 4.4374v-2.7932h-.9423zm-19.8937-1.3812h-6.9465v-1.6945h.8456v-4.3601h-.8456v-1.6912h6.9507v2.5813h-1.7408v-.8901h-2.1376v1.2902h2.0039v1.6904h-2.0039v1.3794h2.1376v-.8893h1.7408zm20.1114 13.7058v1.6441h1.7761v.6481c-.4514.39-.9095.517-1.5046.517-1.1197-.0345-1.8552-.97-1.8552-2.2309 0-1.3752.6952-2.1998 1.8552-2.1998.3842-.0156.7649.0792 1.0969.2732l.0084.8095h1.9594v-1.814c-.7397-.6169-1.6669-1.0549-3.2059-1.0549-2.6604 0-3.9507 1.9459-3.9507 4.0205-.0142.628.1179 1.2508.3858 1.819-.5825.559-1.7887.3303-2.1855-.833.4198-.2223.7723-.553 1.0208-.9578s.3839-.8688.3922-1.3437c0-1.4366-1.044-2.5654-3.1143-2.5654h-8.2585v1.713h1.0179v3.0076c0 .9086-.596 1.3634-1.2247 1.3634s-1.2945-.4901-1.2945-1.3634v-3.0076h.8406v-1.713h-3.9162v1.713h.7346v2.9067c0 2.3074 1.7812 3.3564 3.5304 3.3564 1.9947 0 3.5346-1.1894 3.5346-3.3564v-2.9024h1.3785v4.3709h-.9582v1.6811h3.8498v-1.6811h-.6909v-.8405h1.0002c1.0414 2.8394 3.9835 3.0521 5.6697 2.0282.4539.3488 1.2936.6287 2.3435.6287 1.7845 0 2.9739-.7623 3.4993-1.7416v-2.8949zm-7.7618.3337h-1.0163v-1.8888h1.0146c.6985 0 1.2735.2051 1.2735.944 0 .6977-.5733.9448-1.2718.9448z"
              fill={color}
            />
          </svg>
        </div>
      </div>
    </>
  );
}
