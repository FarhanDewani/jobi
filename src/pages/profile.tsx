import { Button } from '@/components';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiSolidPhone } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useTheme } from '@/components/hooks';
import { PageWrapper } from '@/components/page-wrapper';

export default function ProfilePage() {
  const { theme, setTheme, setFontSize } = useTheme();
  return (
    <PageWrapper>
      <div className="flex justify-between">
        <Heading size={'md'}>Profile Page</Heading>
        <div>
          <Link to={'/addsection'}>
            <Button className="mr-2 h-fit" color="info">
              Add Section
            </Button>
          </Link>
          <Link to={'/previewprofile'}>
            <Button className="h-fit" color="accent">
              Preview Profile
            </Button>
          </Link>
        </div>
      </div>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Basic Information
              </Box>
              <Button className="btn-info btn-sm flex justify-end">EDIT</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box overflow="hidden">
              <Center>
                <VStack>
                  <Heading size="lg">Rheyfan Syafdani</Heading>
                </VStack>
              </Center>

              <Stack spacing={3} p={5}>
                <Stack direction="row" spacing={4} align="center">
                  <BiSolidPhone />
                  <Text fontSize="md">+62 81285744522</Text>
                </Stack>

                <Stack direction="row" spacing={4} align="center">
                  <BsMailbox />
                  <Text fontSize="md">rheyfan.s@gmail.com</Text>
                </Stack>

                <Stack direction="row" spacing={4} align="center">
                  <AiOutlineGlobal />
                  <Text fontSize="md">
                    Jalan Kakap Raya, Karawaci Baru Kel . , Karawaci , Tangerang Kota , Banten ,
                    Indonesia
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Salary Expectation
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Provide a salary range for better job matches & increase chances to get hired by the
            perfect company. Click Add at the top right corner to add Salary.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Work Experience
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Besides your last job title or company, employers want to know what you accomplished
            while there. Detail achievements and contributions made. Click Add at the top right
            corner to add Work History.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Education
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Your most recent and relevant educational attainment should come first. If you have a
            post-graduate or master's degree, no need to include where you went to high
            school. Click Add at the top right corner to add Educational Attainment.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Skills
              </Box>
              <Button className="btn-info btn-sm flex justify-end">ADD</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Enumerate your skills, competencies, and talents relevant to the position and industry
            you are applying to. Indicate proficiency levels (Basic, Novice, Intermediate, Advanced,
            Expert) for each skill. Click Add at the top right corner to add Skills.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion className="mt-2" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: '#0070f3', color: 'white' }}>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left">
                Resume
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Note: Your profile is the first thing recruiters see and not your uploaded resume, so
            make sure your Kalibrr profile is as complete and detailed as your uploaded resume.
            <div className="mt-2 flex items-center justify-center">
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PageWrapper>
  );
}
