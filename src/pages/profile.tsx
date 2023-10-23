import { Button } from '@/components';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Icon,
  Image,
} from '@chakra-ui/react';
import { BiSolidUserBadge } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { PageWrapper } from '@/components/page-wrapper';

export default function ProfilePage() {
  return (
    <PageWrapper>
      <div className="flex justify-between">
        <h1 className="font-bold">Profile Page</h1>
        <div>
          <Link to={'/addsection'}>
            <Button className="mr-2 h-fit" color="info">
              Add Section
            </Button>
          </Link>
          <Link to={'/previewprofile'}>
            <Button className="h-fit" color="default">
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
            <Box className="ml-5" display="flex" alignItems="center">
              <Avatar size="xl" name="profilepic" src="/bapake.jpg" />
              <Box className="mb-14 ml-5" display="flex">
                <BiSolidUserBadge size={20} />
                Rheyfan Sayidan
              </Box>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PageWrapper>
  );
}
