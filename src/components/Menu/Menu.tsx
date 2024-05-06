'use client';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'
import { globalStore } from '@/store/globalStore.store';

function a11yProps(index: number) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}

type TabsProps = {
    label: string;
    value: string;
    disabled: boolean;
}

type MenuProps = {
    tabs: TabsProps[] 
}

function Menu({ tabs }: MenuProps) {
    const {positionMenu, setPositionMenu} = globalStore();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setPositionMenu(newValue);
    };
  
    return (
      <Box>
        <Box>
          <Tabs 
            value={positionMenu}
            onChange={handleChange} 
            aria-label="basic tabs example" 
          >
            {
              tabs?.map((tab, index) => (
                <Tab  
                  key={+index} 
                  label={tab.label} 
                  {...a11yProps(index)} 
                  disabled={tab.disabled}
                />
              ))
            }
          </Tabs>
        </Box>
      </Box>
    );
}

export default Menu