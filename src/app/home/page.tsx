import {Box, Button, Divider, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'space-between'
          }}
      >
        <Box
            className={'HeaderBox'}
            sx={{
              height: '64px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 32px'
            }}
        >
          <Box
              className={'HeaderImages'}
              sx={{
                display: 'flex',
                gap: '8px'
              }}
          >
            <Image
                width={221}
                height={26}
                alt="dobedub logo"
                src="/dobedub.png"
            />
          </Box>

          <Box
              sx={{
                display: 'flex',
                gap: '8px'
              }}
          >
            <Link href={'/login'}><Button variant={'text'}  sx={{fontWeight: 'bold'}}>로그인</Button></Link>
            <Link href={'/sign-up'}><Button variant={'text'} sx={{fontWeight: 'bold'}}>회원가입</Button></Link>
            <Link href={'/brand-site'}><Button variant={'contained'} sx={{fontWeight: 'bold'}}>브랜드 사이트 바로가기</Button></Link>
        </Box>
        </Box>
        <Divider />
        <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              // justifyItems: 'center',
              flexDirection: 'column',
              marginLeft: '88px'
            }}
        >
          <Typography variant={'p'} sx={{ fontSize: '2.625rem'}}>글로벌보이스뱅크 두비덥,</Typography>
          <Typography variant={'p'} sx={{ fontSize: '2.625rem'}}>보이스아티스트는 음성을 저축하고</Typography>
          <Typography variant={'p'} sx={{ fontSize: '2.625rem'}}>웹툰 서비스는 그 음성으로 수익을 창출합니다.</Typography>
          <Typography variant={'p'} sx={{ fontSize: '2.625rem'}}></Typography>
          <Typography variant={'p'} sx={{ fontSize: '2.625rem', fontWeight: 700, marginTop: '40px' }}>
            GLOBAL VOICE BANK <Typography variant={'string'} sx={{ color: 'red'}}> DOBEDUB 덥라이트 </Typography>
          </Typography>

          <Button variant={'contained'} sx={{ marginTop: '24px', width: '186px'}}>시작하기</Button>
        </Box>
      </Box>
  )
}
