import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  HomeContentWrapper: {
    width: '95%',
    marginTop: 5,
  },
  HomeContent: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
  TextContent: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 3,
  },
  MainText: {
    fontSize: 16,
    fontWeight: '600',
  },
  SubText: {
    fontSize: 14,
    fontWeight: '500',
  },
  CommentText: {
    fontSize: 14,
    fontWeight: '500',
  },
  ImageBox: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  NoImage: {
    width: '60%',
    aspectRatio: 1,
    backgroundColor: '#E2E2E2',
    borderRadius: 10,
  },
  YesImage: {
    width: '60%',
    aspectRatio: 1,
    borderRadius: 10,
  },
});
